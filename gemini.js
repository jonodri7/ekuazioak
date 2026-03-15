// ===== GROQ API =====
const GROQ_API_KEY = "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";
const GROQ_URL     = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL   = 'llama-3.3-70b-versatile';

async function callGroq(prompt) {
  const response = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.65,
      max_tokens: 1400,
    })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    console.error('[Groq] Error de API:', response.status, err.error?.message || err);
    throw new Error('groq_error');
  }
  const data = await response.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error('groq_error');
  return text.trim();
}

const callGemini = callGroq; // alias de compatibilidad

// =============================================================================
// MOTOR DE VALIDACIÓN MATEMÁTICA
// Regla absoluta: nunca se usa respuestaCorrecta de Groq para validar.
// Se sustituye el valor del alumno en la ecuación original y se evalúa.
// =============================================================================

/**
 * Extrae la ecuación matemática del texto de la pregunta.
 *
 * Estrategia: busca cada '=' en el texto y expande hacia la izquierda y
 * hacia la derecha mientras los caracteres sean matemáticos (dígitos, x,
 * operadores, paréntesis…). Si el fragmento resultante contiene 'x' y
 * tiene al menos 5 chars, es la ecuación.
 *
 * Esto funciona sin importar el idioma ni si hay o no hay ':' antes de la
 * ecuación, porque sólo mira los caracteres que rodean el signo '='.
 */
function extraerEcuacion(texto) {
  // Caracteres que pueden aparecer en una expresión matemática con x
  const esMat = c => /[0-9x+\-*\/()[\]^.,²³ \t]/.test(c);

  for (const linea of texto.split('\n')) {
    for (let i = 0; i < linea.length; i++) {
      if (linea[i] !== '=') continue;

      // Expandir izquierda
      let L = i - 1;
      while (L >= 0 && esMat(linea[L])) L--;
      L++;

      // Expandir derecha
      let R = i + 1;
      while (R < linea.length && esMat(linea[R])) R++;

      const ec = linea.slice(L, R).trim();
      if (ec.length >= 5 && /x/i.test(ec)) return ec;
    }
  }
  return null;
}

/** Parsea un número: entero, decimal ('.' o ',') o fracción 'a/b'. */
function parsearNumero(str) {
  const s = str.toString().trim().replace(',', '.');
  if (s.includes('/')) {
    const [n, d] = s.split('/').map(Number);
    return (d && !isNaN(n) && !isNaN(d)) ? n / d : null;
  }
  const v = parseFloat(s);
  return isNaN(v) ? null : v;
}

/**
 * Convierte una expresión matemática en JS evaluable.
 * x se pasa como parámetro en calcularLado, no se sustituye aquí.
 * Maneja: (...)², (...)³, x^2, 2(…), )(, )x, 3x, corchetes.
 */
function prepararExpr(expr) {
  return expr
    .trim()
    .replace(/²/g, '**2')              // (x-1)² → (x-1)**2  (cualquier posición)
    .replace(/³/g, '**3')
    .replace(/\^/g, '**')
    .replace(/(\d)\s*\(/g, '$1*(')     // 2( → 2*(
    .replace(/\)\s*\(/g, ')*(')        // )( → )*(
    .replace(/x\s*\(/g, 'x*(')         // x( → x*(
    .replace(/\)\s*x/gi, ')*x')        // )x → )*x
    .replace(/(\d)\s*x/gi, '$1*x')     // 3x → 3*x
    .replace(/\[/g, '(').replace(/\]/g, ')');
}

/**
 * Evalúa un lado de la ecuación con x=xVal.
 * Usa Function('x', ...) para pasar x como argumento real, no como string.
 * Devuelve el número resultante, o null si no se puede evaluar.
 */
function calcularLado(expr, xVal) {
  try {
    const js = prepararExpr(expr);
    // eslint-disable-next-line no-new-func
    const r = new Function('x', `return (${js})`)(xVal);
    return (typeof r === 'number' && isFinite(r)) ? r : null;
  } catch {
    return null;
  }
}

/**
 * Verifica si x=xVal satisface la ecuación dada.
 * Separa en LHS y RHS por el primer '=', evalúa ambos y compara.
 * Devuelve true/false, o null si la ecuación no es evaluable.
 */
function verificarEnEcuacion(ecuacion, xVal) {
  const idx = ecuacion.indexOf('=');
  if (idx === -1) return null;
  const lhs = calcularLado(ecuacion.slice(0, idx), xVal);
  const rhs = calcularLado(ecuacion.slice(idx + 1), xVal);
  if (lhs === null || rhs === null) return null;
  return Math.abs(lhs - rhs) < 0.0001;
}

// ─────────────────────────────────────────────────────────────────────────────
// evaluarConEcuacion — punto de entrada principal para validar al alumno
// NUNCA usa respuestaCorrecta de Groq. Sólo usa la ecuación original.
// Devuelve: true (correcto) | false (incorrecto) | null (no verificable aquí)
// ─────────────────────────────────────────────────────────────────────────────
function evaluarConEcuacion(textoPregunta, respuestaAlumno) {
  const ecuacion = extraerEcuacion(textoPregunta);
  if (!ecuacion) return null;  // no hay ecuación en el texto → fallback

  const resp = respuestaAlumno.trim();
  const respN = resp.toLowerCase().replace(/\s/g, '');

  // Sistemas (x=N y=M): necesitaría ambas ecuaciones → fallback
  if (/y\s*=/.test(respN)) return null;

  // "Sin solución" → fallback (no se puede verificar algebraicamente)
  if (/ezdusoluziorik|notienesoluci|sinsoluc/.test(respN)) return null;

  // ── Dos soluciones: x1=N x2=M (admite x₁/x₂, con o sin espacios) ──────
  const dosSol = respN.match(/x[1₁]=(-?[\d.,/]+).*?x[2₂]=(-?[\d.,/]+)/);
  if (dosSol) {
    const v1 = parsearNumero(dosSol[1]);
    const v2 = parsearNumero(dosSol[2]);
    if (v1 === null || v2 === null) return null;
    const r1 = verificarEnEcuacion(ecuacion, v1);
    const r2 = verificarEnEcuacion(ecuacion, v2);
    if (r1 === null || r2 === null) return null;
    return r1 && r2;
  }

  // ── Una solución: "x=4", "x = -3", "5/2", "4" ──────────────────────────
  const unaSol = respN.match(/^x=(-?[\d.,/]+)$/) || respN.match(/^(-?[\d.,/]+)$/);
  if (!unaSol) return null;
  const val = parsearNumero(unaSol[1]);
  if (val === null) return null;

  return verificarEnEcuacion(ecuacion, val);
}

// generarPregunta eliminado — la app usa el banco questions.js

// ─────────────────────────────────────────────────────────────────────────────
// EVALUAR RESPUESTA DEL ALUMNO (síncrono, sin Groq)
// ─────────────────────────────────────────────────────────────────────────────
function evaluarRespuesta(textoPregunta, respuestaAlumno, respuestaCorrecta, respuestasEquivalentes) {
  // 1. Verificación matemática: sustituye el valor del alumno en la ecuación original.
  const matematico = evaluarConEcuacion(textoPregunta, respuestaAlumno);
  if (matematico !== null) return { correcto: matematico };

  // 2. Comparación local de strings/números.
  const local = evaluarLocal(respuestaAlumno, respuestaCorrecta, respuestasEquivalentes);
  return { correcto: local ?? false };
}

// ─────────────────────────────────────────────────────────────────────────────
// GENERAR EXPLICACIÓN DETALLADA DEL ERROR
// ─────────────────────────────────────────────────────────────────────────────
async function generarExplicacionError(pregunta, respuestaAlumno, respuestaCorrecta, explicacionBase, idioma = 'es', temaKey = '') {
  const eu = idioma === 'eu';

  const instrLang = eu
    ? 'Idatzi azalpen osoa EUSKERAZ.'
    : 'Escribe toda la explicación en ESPAÑOL.';

  const esPrimer    = temaKey === 'Ecuaciones primer grado';
  const esSegundo   = temaKey === 'Ecuaciones segundo grado';
  const esSistema   = temaKey === 'Sistemas de ecuaciones';
  const esProblema  = temaKey === 'Problemas con ecuaciones';

  // Pasos de metodología adaptados al tipo de ecuación
  let pasos;
  if (esSegundo) {
    pasos = eu
      ? `1. Laburtu ax²+bx+c=0 formara
2. Identifikatu a, b, c balioak
3. Aplikatu formula: x = (-b ± √(b²-4ac)) / 2a
4. Kalkulatu diskriminantea (b²-4ac)
5. Kalkulatu x₁ eta x₂ banaka
6. Egiaztapena: ordezkatu bi balioak ekuazio originalean`
      : `1. Reducir a la forma ax²+bx+c=0
2. Identificar a, b, c
3. Aplicar fórmula: x = (-b ± √(b²-4ac)) / 2a
4. Calcular el discriminante (b²-4ac)
5. Calcular x₁ y x₂ por separado
6. Egiaztapena: sustituir ambos valores en la ecuación original`;
  } else if (esSistema) {
    pasos = eu
      ? `1. Aukeratu metodoa (ordezkatzea / berdinketa / murrizketa)
2. Despejatu aldagai bat edo batu ekuazioak
3. Lortu lehen aldagaiaren balioa
4. Ordezkatu bigarren aldagaia lortzeko
5. Egiaztapena: ordezkatu x eta y bi ekuazioetan`
      : `1. Elegir método (sustitución / igualación / reducción)
2. Despejar una variable o sumar las ecuaciones
3. Obtener el valor de la primera variable
4. Sustituir para obtener la segunda
5. Egiaztapena: sustituir x e y en ambas ecuaciones`;
  } else if (esProblema) {
    pasos = eu
      ? `1. DATUAK: irakurri problema eta identifikatu ezagunak eta ezezagunak
2. Ezarri x ezezagun nagusiarentzat
3. Idatzi ekuazioa problemaren baldintzarekin
4. Ebatzi ekuazioa
5. ERANTZUNA: eman erantzuna esaldi osatuarekin`
      : `1. DATUAK: leer el problema e identificar datos y la incógnita
2. Asignar x a la incógnita principal
3. Plantear la ecuación con la condición del problema
4. Resolver la ecuación
5. ERANTZUNA: responder con una frase completa`;
  } else {
    // Primer grado (por defecto)
    pasos = eu
      ? `1. Zabaldu parentesiak (expandir paréntesis)
2. Kalkulatu MCM frakcioetarako (si hay fracciones)
3. x-ak ezkerrera, zenbakiak eskuinera (transposición de términos)
4. Despejatu x (divide ambos lados entre el coeficiente de x)
5. Egiaztapena: ordezkatu x balioa ekuazio originalean eta egiaztatu bi aldeak berdinak direla`
      : `1. Zabaldu parentesiak (expandir paréntesis)
2. Kalkulatu MCM frakcioetarako (si hay fracciones)
3. x-ak ezkerrera, zenbakiak eskuinera (transponer términos)
4. Despejatu x (divide ambos lados entre el coeficiente de x)
5. Egiaztapena: sustituir el valor de x en la ecuación original y verificar que ambos lados son iguales`;
  }

  const prompt = `Eres un profesor de matemáticas de 3º ESO. ${instrLang}

El alumno ha intentado resolver: ${pregunta}
Ha dado como respuesta: ${respuestaAlumno}
Pero la respuesta correcta es: ${respuestaCorrecta}

Explica paso a paso cómo resolver la ecuación siguiendo EXACTAMENTE esta metodología:
${pasos}

IMPORTANTE: Verifica cada paso matemáticamente antes de escribirlo. No cometas errores de cálculo.

Responde con este formato EXACTO (los prefijos siempre en español, el texto en el idioma indicado):

ERROR: [1-2 frases: qué error cometió el alumno y en qué paso]
SOLUCIÓN:
1. [primer paso con la operación concreta y su resultado numérico]
2. [segundo paso]
3. [continúa hasta llegar al resultado]
${esPrimer  ? 'EGIAZTAPENA: [sustituir el valor de x en la ecuación original y comprobar que LHS = RHS]' : ''}
${esProblema ? 'ERANTZUNA: [frase completa con la respuesta en el contexto del problema]' : ''}
CONCLUSIÓN: [la respuesta final de forma clara]

Lenguaje cercano y motivador para un alumno de 15 años. Máximo 220 palabras.`;

  return await callGroq(prompt);
}

// ─────────────────────────────────────────────────────────────────────────────
// EVALUACIÓN LOCAL (sin llamada a la API)
// ─────────────────────────────────────────────────────────────────────────────
function evaluarLocal(respuestaAlumno, respuestaCorrecta, respuestasEquivalentes) {
  const norm = s => s.toString().trim().toLowerCase()
    .replace(/\s+/g, '')
    .replace(/,/g, '.')
    .replace(/x\s*=\s*/g, 'x=')
    .replace(/y\s*=\s*/g, 'y=')
    .replace(/x₁\s*=\s*/g, 'x1=')
    .replace(/x₂\s*=\s*/g, 'x2=');

  const rA = norm(respuestaAlumno);
  const rC = norm(respuestaCorrecta);

  if (rA === rC) return true;

  if (Array.isArray(respuestasEquivalentes)) {
    for (const eq of respuestasEquivalentes) {
      if (rA === norm(eq)) return true;
    }
  }

  // Comparación numérica — usa parsearNumero para manejar fracciones (e.g. 1/2)
  const numA = parsearNumero(rA.replace(/^[xy]=/, '').replace(/^x[12]=/, ''));
  const numC = parsearNumero(rC.replace(/^[xy]=/, '').replace(/^x[12]=/, ''));
  if (!isNaN(numA) && !isNaN(numC)) {
    if (Math.abs(numA - numC) < 0.0001) return true;
    // Si al menos uno tiene decimal → definitivamente diferente
    if (rC.replace(/^[xy]=/, '') === rC.replace(/^[xy]=/, '').replace('.', '')) {
      return false; // correcto es entero
    }
    return false;
  }

  // Sistemas: x=N, y=M
  if (rC.includes('x=') && rC.includes('y=')) {
    const val = (str, l) => {
      const m = str.match(new RegExp(l + '=([\\d.\\-/]+)'));
      return m ? parseFloat(m[1]) : null;
    };
    const xC = val(rC,'x'), yC = val(rC,'y'), xA = val(rA,'x'), yA = val(rA,'y');
    if (xC !== null && yC !== null && xA !== null && yA !== null) {
      return Math.abs(xA-xC) < 0.01 && Math.abs(yA-yC) < 0.01;
    }
  }

  // Dos soluciones x1 y x2 en cualquier orden
  if (rC.includes('x1=') || rC.includes('x₁=')) {
    const parseSols = str => {
      const m1 = str.match(/x[1₁]=([^\s,x]+)/);
      const m2 = str.match(/x[2₂]=([^\s,x]+)/);
      return [m1 ? parseFloat(m1[1]) : null, m2 ? parseFloat(m2[1]) : null];
    };
    const [c1,c2] = parseSols(rC);
    const [a1,a2] = parseSols(rA);
    if (c1!==null && c2!==null && a1!==null && a2!==null) {
      return (Math.abs(a1-c1)<0.01 && Math.abs(a2-c2)<0.01) ||
             (Math.abs(a1-c2)<0.01 && Math.abs(a2-c1)<0.01);
    }
  }

  return null; // No se puede evaluar localmente
}
