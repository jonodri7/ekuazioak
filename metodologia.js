// ===== METODOLOGÍA EXTRAÍDA DE LOS PDFs DEL PROFESOR (3.DBH) =====
// Este fichero encapsula la metodología exacta del profesor, los patrones de ejercicios
// por nivel de dificultad, la notación usada y las estructuras de resolución.
// Se inyecta en los prompts de la IA para que genere ejercicios y explicaciones
// que coincidan exactamente con el estilo del profesor.

// ─────────────────────────────────────────────────────────────────
// 1. LEHENENGO MAILAKO EKUAZIOAK  (Ecuaciones de 1er grado)
// ─────────────────────────────────────────────────────────────────
const METODO_LEHENENGO = `
METODOLOGÍA EXACTA DEL PROFESOR — LEHENENGO MAILAKO EKUAZIOAK (1er grado):

PASOS OBLIGATORIOS EN ESTE ORDEN:
1. Zabaldu parentesiak: Expandir TODOS los paréntesis y corchetes, uno a uno.
   - Ejemplo: 4(x-1)-15 = 3(x-1)  →  4x-4-15 = 3x-3
2. Frakczioak badaude (si hay fracciones): Indicar explícitamente el MCM y multiplicar TODOS los términos.
   - Ejemplo: "mcd(4,7)=28" → multiplicar cada término por 28
   - Resultado: todos los términos quedan sin denominador
3. x-ak ezkerrera, zenbakiak eskuinera: Pasar términos con x a la izquierda, constantes a la derecha.
   - Usar el signo correcto al cambiar de lado
4. Despejar x: ax = b → x = b/a. Simplificar la fracción resultante.
5. EGIAZTAPENA (verificación OBLIGATORIA): Sustituir el valor de x en la ecuación original y verificar que ambos lados son iguales.
   - Formato: escribir "Egiaztapena:" y mostrar la sustitución paso a paso

PATRONES DE EJERCICIOS POR NIVEL:

FACIL (paréntesis simples, sin fracciones):
- Patrón A: a(x±b) ± c = d(x±e)   Ej: 4(x-1)-15 = 3(x-1)  →  x=16
- Patrón B: a(b-cx) - d(x-e) = fx-g   Ej: 3(2-3x)-4(x-5)=6x-25  →  x=51/19
- Patrón C: (x-a) = b[cx-d(x-e)]  (corchetes anidados)   Ej: (x-13)=4[3x-4(x-2)]  →  x=9
- Soluciones habituales: enteros pequeños o fracciones simples

MEDIO (fracciones con 1-2 denominadores distintos):
- Patrón A: ax/b - cx/d = e - fx   (MCM de b y d)   Ej: 3x/4 - x/7 = 73-2x  →  x=28
- Patrón B: ax - (bx-c)/d - e/d = (x+f)/g + x - h   Ej: 2x-1-(3x-1)/3-5/3=(x+2)/6+x-3  →  x=2
- Patrón C: a(x-b)/c - d(x+e)/f = g(x+h)-k   Ej: 3(x-1)/7-4(x+3)/5=2(x+2)-7  →  x=6/83
- Soluciones habituales: fracciones como 51/19, 6/83, 28, 2

DIFICIL (3 o más denominadores O cuadrados que se cancelan):
- Patrón A: múltiples fracciones, MCM grande   Ej: 2(x-1)/3-3(x-2)/4=4(x-3)/5-3/10  →  x=4  (MCM=60)
- Patrón B: (x-a)² - (x+b)(x-c) = k   (los x² se cancelan)   Ej: (x-3)²-(x+1)(x-1)=3  →  x=7/6
- Patrón C: (x-a)²-(x+b)² = cx(x-d)-ex²+f   Ej: (x-1)²-(x+1)²=2x(x-3)-2x²+2  →  x=1
- Clave: expandir los cuadrados, los x² se cancelan y queda ecuación de 1er grado

EXPERTO (fracciones con numeradores cuadráticos):
- Patrón A: (ax-b)²/c - (dx+e)²/f = g   Ej: (2x-1)²/4-(3x+1)²/9=1/6  →  x=-1/60
- Patrón B: (x-a)²/b - (cx+d)²/e = (x+f)(x-g)/b - hx²/e   Ej: (x-1)²/2-(2x+1)²/3=(x+2)(x-2)/2-4x²/3  →  x=13/14
- Soluciones habituales: fracciones como -1/60, 13/14, 109/84

FORMATO DE LA EXPLICACIÓN (cuando el alumno falla):
ERROR: [describir el paso exacto donde se equivocó]
SOLUCIÓN:
1. Zabaldu parentesiak: [expandir todos los términos]
2. [si hay fracciones: mcd(...) = N  →  multiplicar todo por N]
3. x-ak ezkerrera, zenbakiak eskuinera: [reagrupar]
4. [despejar x]
EGIAZTAPENA: [sustituir x en la ecuación original, mostrar que ambos lados son iguales]
CONCLUSIÓN: x = [valor]
`;

// ─────────────────────────────────────────────────────────────────
// 2. BIGARREN MAILAKO EKUAZIOAK  (Ecuaciones de 2º grado)
// ─────────────────────────────────────────────────────────────────
const METODO_BIGARREN = `
METODOLOGÍA EXACTA DEL PROFESOR — BIGARREN MAILAKO EKUAZIOAK (2º grado):

PASOS OBLIGATORIOS EN ESTE ORDEN:
1. Laburtu forma orokorrera (reducir a forma general): Pasar TODOS los términos a la izquierda → ax²+bx+c=0
   - Expandir paréntesis, eliminar denominadores (MCM si hay fracciones), agrupar
2. Identificar a, b, c EXPLÍCITAMENTE con llaves:  { a = N
                                                    { b = N
                                                    { c = N
3. Aplicar la fórmula general:  x = (-b ± √(b²-4ac)) / 2a
4. Calcular el discriminante: b²-4ac = N (cálculo explícito)
5. Calcular x₁ y x₂ POR SEPARADO:
   - x₁ = (-b + √N) / 2a = ...
   - x₂ = (-b - √N) / 2a = ...
6. Si discriminante < 0 → escribir "EZ DU SOLUZIORIK" (no tiene solución)
7. Encuadrar cada solución: [x₁ = N]  [x₂ = N]

CASOS ESPECIALES — EKUAZIO OSATUGABEAK (incompletas):
TIPO 1 (c=0, falta término independiente): ax²+bx=0
  → Factorizar: x(ax+b) = 0
  → x₁=0  y  ax+b=0 → x₂=-b/a
  → Ejemplo: x²+4x=0 → x(x+4)=0 → x₁=0, x₂=-4

TIPO 2 (b=0, falta término lineal): ax²+c=0
  → Despejar: x² = -c/a
  → Si -c/a < 0: EZ DU SOLUZIORIK
  → Si -c/a ≥ 0: x = ±√(-c/a)
  → Ejemplo: x²=25 → x=±5 → x₁=5, x₂=-5

PATRONES DE EJERCICIOS POR NIVEL:

FACIL (forma estándar directa o incompleta simple):
- Directa: x²-6x+8=0,  x²+x-12=0,  2x²-7x+6=0,  5x²+14x-3=0
- Incompleta tipo 1: x²+2x=0,  5x²+x=0,  x²+4x=0
- Incompleta tipo 2: x²=9,  4x²=1,  12x²=3,  x²+6=10
- Soluciones: enteros o fracciones simples

MEDIO (necesita reordenación sencilla):
- Patrón A: ax²+bx+c = dx+e  →  mover todo a la izq   Ej: x²-3x-5=2x+9  →  x²-5x-14=0
- Patrón B: producto/expansión:   Ej: 6x²-5(x-1)=x(x+1)+4  →  5x²-6x+1=0
- Patrón C: x(x+a) = b → x²+ax-b=0
- Identificar siempre a, b, c explícitamente

DIFICIL (con fracciones, requiere MCM):
- Patrón A: fracciones con x²:  Ej: 2x²+x/4 = x²+4x/5+1/5  (MCM=20)  →  20x²-11x-4=0
- Patrón B: mezcla:  Ej: x(x+1)-1/2 = (x-4)/6  (MCM=6)  →  6x²+5x+1=0
- Patrón C: con fracciones complejas  Ej: (2x+2)/3 + (x²-x)/5 = (3x+7)/10

EXPERTO (fracciones complejas con x²):
- Patrón A: x/2·(x+1/30) = x/3·(x+2/5)  →  OSATUGABEA: 10x²-7x=0
- Patrón B: x²/2+x = (2x²-5)/3 - 1  →  -x²+6x+16=0
- Nota: algunos resultan OSATUGABEA (incompleta) aunque parezcan completas

FORMATO DE LA EXPLICACIÓN (cuando el alumno falla):
ERROR: [describir el paso exacto donde se equivocó]
SOLUCIÓN:
1. Laburtu forma orokorrera: [pasar todo a la izquierda, expandir, simplificar]
   → ax²+bx+c=0   con  { a=N, b=N, c=N }
2. Formula orokorra aplikatu:  x = (-b ± √(b²-4ac)) / 2a
3. Diskriminantea: b²-4ac = N²-4·N·N = N
4. [si discriminante ≥ 0:]
   x₁ = (-b+√disc)/2a = N  →  [x₁=N]
   x₂ = (-b-√disc)/2a = N  →  [x₂=N]
   [si discriminante < 0:] EZ DU SOLUZIORIK
CONCLUSIÓN: x₁=[val]  eta  x₂=[val]   (o: EZ DU SOLUZIORIK)
`;

// ─────────────────────────────────────────────────────────────────
// 3. BURUKETAK (Problemas con ecuaciones)
// ─────────────────────────────────────────────────────────────────
const METODO_BURUKETAK = `
METODOLOGÍA EXACTA DEL PROFESOR — BURUKETAK (Problemas con ecuaciones):

ESTRUCTURA OBLIGATORIA EN TRES SECCIONES:

┌─ DATUAK (datos del problema) ────────────────────────────────────
│  Listar con * todos los datos del enunciado
│  Marcar la pregunta con →
│  Ejemplo:
│    * Martinen adina = Idoiaren adina + 2 urte
│    * Bien adinen biderkadura = 35
│    → Zenbat urte ditu bakoitzak?
└──────────────────────────────────────────────────────────────────

┌─ ERAGIKETAK (operaciones) ───────────────────────────────────────
│  1. Asignar variable: "X" o "[nombre] = x"
│     Ej: "Idoiaren adina = x"
│  2. Expresar el resto en función de x
│     Ej: "Martinen adina = x+2"
│  3. Escribir la ecuación usando los datos
│     Ej: x(x+2) = 35  →  x²+2x-35=0
│  4. Resolver siguiendo la metodología de 2º grado (con a,b,c explícitos)
│  5. Si hay dos soluciones matemáticas, razonar cuál es válida en el contexto
│     Ej: si x=-7, la edad sería negativa → solo x=5 tiene sentido
└──────────────────────────────────────────────────────────────────

┌─ ERANTZUNA (respuesta) ──────────────────────────────────────────
│  Escribir una frase completa con el resultado interpretado
│  Ej: "Idoiak 5 urte ditu eta Martinek 7 urte ditu"
│  Si hay dos soluciones válidas, mencionarlas:
│  Ej: "Zenbakiak 18 eta 20 edo -20 eta -18 izan daitezke"
└──────────────────────────────────────────────────────────────────

TIPOS DE PROBLEMAS (extraídos directamente del PDF del profesor):

FACIL — Zenbaki-arazoak (problemas de números):
- Tipo A: "Bilatu zenbaki bat bere [múltiplo]arekin biderkatuz [N] ematen duena"
  Modelo: Zenbakia=x, [múltiplo]=kx → x·kx=N → kx²=N → x²=N/k
- Tipo B: "Bilatu zenbaki bat eta bere bikoitza/hirukoitza..."
  Modelo: x(nx) = N

MEDIO — Zenbaki jarraiak / banaketa (consecutivos / división):
- Tipo A consecutivos enteros: "Jarraian dauden bi zenbaki osoen arteko biderkadura N da"
  Modelo: 1. zenbakia=x, 2. zenbakia=x+1 → x(x+1)=N
- Tipo B consecutivos pares: "Jarraian dauden bi zenbaki bikoiti, biderkadura N"
  Modelo: 1. bikoitia=2x, 2. bikoitia=2x+2 → 2x·(2x+2)=N
- Tipo C división: "Banatu N zenbakia bitan, bien berbiduren batura M dela"
  Modelo: 1.=x, 2.=N-x → x²+(N-x)²=M

DIFICIL — Adina / geometria (edades / geometría):
- Tipo A edades: "A-k B baino N urte gehiago ditu. Adinen biderkadura M da"
  Modelo: B=x, A=x+N → x(x+N)=M
- Tipo B rectángulo: "Laukizuzen baten alde bat bestea baino N cm handiagoa. Azalera M cm²"
  Modelo: alde1=x, alde2=x+N → x(x+N)=M
- Tipo C cuadrado: "Karratu bati alde bakoitzeko N cm kenduz, M cm² azalera"
  Modelo: aldea=x → (x-N)²=M

EXPERTO — Geometria konplexua / erlazio anitzak (geometría compleja):
- Tipo A diagonal/perímetro con condiciones múltiples
- Tipo B: edad con condiciones en diferentes momentos temporales
- Tipo C: velocidad/trabajo (distantzia = abiadura × denbora)

FORMATO DE LA EXPLICACIÓN (cuando el alumno falla):
ERROR: [qué planteó mal o qué error cometió al resolver]
SOLUCIÓN:
DATUAK:
  * [dato 1]
  * [dato 2]
  → [pregunta]
ERAGIKETAK:
1. [Incógnita] = x  ;  [otra cantidad] = [expresión en x]
2. Ekuazioa: [plantear ecuación]
3. [resolver: forma general, a/b/c, fórmula, x₁, x₂]
4. [interpretar soluciones en el contexto]
ERANTZUNA: [frase completa con la respuesta]
CONCLUSIÓN: [respuesta final]
`;

// ─────────────────────────────────────────────────────────────────
// 4. SISTEMAS DE ECUACIONES  (nota: no hay PDF específico del prof.)
// ─────────────────────────────────────────────────────────────────
const METODO_SISTEMAS = `
METODOLOGÍA — EKUAZIO-SISTEMAK (Sistemas de ecuaciones 2 incógnitas):

MÉTODOS (por dificultad):
FACIL — Sustitución (ordezkapena):
  1. Despejar una incógnita en una ecuación: x = f(y)
  2. Sustituir en la otra ecuación → ecuación de 1 incógnita
  3. Resolver, obtener y, luego x
  4. Verificar en AMBAS ecuaciones originales

MEDIO — Igualación (berdinketa):
  1. Despejar la misma incógnita en las dos ecuaciones
  2. Igualar las dos expresiones
  3. Resolver, obtener los valores

DIFICIL — Reducción/Eliminación (murrizketa):
  1. Multiplicar una/ambas ecuaciones por factores para igualar coeficientes
  2. Sumar/restar para eliminar una incógnita
  3. Resolver la ecuación resultante

EXPERTO — Con fracciones o coeficientes no enteros:
  1. Limpiar fracciones multiplicando por MCM
  2. Aplicar reducción

FORMATO:
Respuesta: x=[N], y=[M]
Comprobación en las dos ecuaciones (Egiaztapena: 1. ekuazioa, 2. ekuazioa)
`;

// ─────────────────────────────────────────────────────────────────
// FUNCIÓN PRINCIPAL: devuelve la metodología para un tema dado
// ─────────────────────────────────────────────────────────────────
function getMetodologiaParaTema(temaKey) {
  const map = {
    'Ecuaciones primer grado':  METODO_LEHENENGO,
    'Ecuaciones segundo grado': METODO_BIGARREN,
    'Sistemas de ecuaciones':   METODO_SISTEMAS,
    'Problemas con ecuaciones': METODO_BURUKETAK
  };
  return map[temaKey] || '';
}

// ─────────────────────────────────────────────────────────────────
// EJERCICIOS DE REFERENCIA EXTRAÍDOS DE LOS PDFs (por nivel)
// La IA usa estos como guía de estilo y dificultad
// ─────────────────────────────────────────────────────────────────
const EJEMPLOS_POR_TEMA = {
  'Ecuaciones primer grado': {
    facil: [
      "4(x-1) - 15 = 3(x-1)  →  x=16",
      "3(2-3x) - 4(x-5) = 6x-25  →  x=51/19",
      "(x-13) = 4[3x-4(x-2)]  →  x=9",
      "(x-2)² + 3 = (x-1)(-2+x)  →  x=5   [los x² se cancelan]"
    ],
    medio: [
      "3x/4 - x/7 = 73-2x  →  x=28  (MCM=28)",
      "2x-1 - (3x-1)/3 - 5/3 = (x+2)/6 + x-3  →  x=2  (MCM=6)",
      "3(x-1)/7 - 4(x+3)/5 = 2(x+2)-7  →  x=6/83  (MCM=35)",
      "(1/8)(x-2) - (2/3)(2x+6) + x = -4  →  x=-6/5  (MCM=24)"
    ],
    dificil: [
      "2(x-1)/3 - 3(x-2)/4 = 4(x-3)/5 - 3/10  →  x=4  (MCM=60)",
      "(x-3)² - (x+1)(x-1) = 3  →  x=7/6  [cuadrados cancelan]",
      "(x-1)² - (x+1)² = 2x(x-3) - 2x² + 2  →  x=1  [x² cancelan]",
      "3x-17/8 - (1-4x)/12 = (1-x)/4 - (9+x)/6  →  x=23/27  (MCM=24)"
    ],
    experto: [
      "(2x-1)²/4 - (3x+1)²/9 = 1/6  →  x=-1/60  (MCM=36)",
      "(x-2)² - (x-1)(x+1) - (x-2)/3 = (1/2)(x+2)  →  x=28/29  (MCM=6)",
      "(x-1)²/2 - (2x+1)²/3 = (x+2)(x-2)/2 - 4x²/3  →  x=13/14  (MCM=6)",
      "7x²-9/7 - (x-3)²/2 = (x-2)²/2 - x  →  x=109/84  (MCM=14)"
    ]
  },
  'Ecuaciones segundo grado': {
    facil: [
      "x²-6x+8=0  (directa, a=1,b=-6,c=8)",
      "x²+x-12=0  (directa)",
      "x²+4x=0  (osatugabea tipo 1: x(x+4)=0)",
      "x²=9x-8  →  x²-9x+8=0",
      "4x²=1  (osatugabea tipo 2: x²=1/4)",
      "x²+6=10  →  x²=4  →  x=±2"
    ],
    medio: [
      "x²-3x-5 = 2x+9  →  x²-5x-14=0  {a=1,b=-5,c=-14}",
      "6x²-5(x-1) = x(x+1)+4  →  5x²-6x+1=0  {a=5,b=-6,c=1}",
      "x²=2x  →  x²-2x=0  (osatugabea tipo 1)",
      "x²=9x-8  →  x²-9x+8=0  {a=1,b=-9,c=8}"
    ],
    dificil: [
      "2x²+x/4 = x²+4x/5+1/5  (MCM=20)  →  20x²-11x-4=0  {a=20,b=-11,c=-4}",
      "x(x+1)-1/2 = (x-4)/6  (MCM=6)  →  6x²+5x+1=0  {a=6,b=5,c=1}",
      "(2x+2)/3 + (x²-x)/5 = (3x+7)/10  (MCM=30)  →  6x²+5x-1=0"
    ],
    experto: [
      "x/2·(x+1/30) = x/3·(x+2/5)  →  10x²-7x=0  (osatugabea tipo 1)",
      "x/3·(x-1/20) = x²/2 - 1/15·(2x-1/2)  (MCM=60)  →  EZ DU SOLUZIORIK",
      "x²/2+x = (2x²-5)/3 - 1  (MCM=6)  →  -x²+6x+16=0  {a=-1,b=6,c=16}"
    ]
  },
  'Problemas con ecuaciones': {
    facil: [
      "Bilatu zenbaki bat bere hirukoitzarekin biderkatuz 12 ematen duena → x·3x=12 → x=±2",
      "Bilatu zenbaki bat bere bikoitzarekin biderkatuz 18 ematen duena → x·2x=18 → x=±3"
    ],
    medio: [
      "Jarraian dauden bi zenbaki osoen arteko biderkadura 110 da (x eta x+1) → x(x+1)=110 → x=10 edo x=-11",
      "Banatu 20 zenbakia bitan, bien berbiduren batura 202 dela (x eta 20-x) → x²+(20-x)²=202 → x=11 edo x=9",
      "Jarraian dauden bi zenbaki bikoiti, biderkadura 360 (2x eta 2x+2) → 2x(2x+2)=360 → x=9"
    ],
    dificil: [
      "Martinek bi urte gehiago ditu Idoiak baino. Biderkadura 35 (x eta x+2) → x(x+2)=35 → Idoia=5, Martin=7",
      "Laukizuzen baten alde bat bestea baino 3 cm handiagoa. Azalera 10 cm² (x eta x+3) → x(x+3)=10 → x=2, x+3=5",
      "Karratu bati 4 cm kenduz, 4 cm² azalera (x-4)² = 4 → x=6 cm"
    ],
    experto: [
      "Karratu bati alde bakoitzeko 4 cm kenduz 4 cm² → (x-4)²=4 → x=6cm eta x+3=5cm",
      "Bi zenbaki: batak 3 gehiago du besteak, eta bien karratuen batura 29 da → x²+(x+3)²=29"
    ]
  }
};

function getEjemplosParaTema(temaKey, dificultad) {
  const tema = EJEMPLOS_POR_TEMA[temaKey];
  if (!tema) return '';
  const ejemplos = tema[dificultad] || tema['medio'] || [];
  return ejemplos.slice(0, 3).join('\n  ');
}
