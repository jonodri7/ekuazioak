// ===== MAPA DE TEMAS =====
// Clave interna siempre en español (para que el JSON de la IA sea consistente).
const TEMAS = [
  { key: 'Ecuaciones primer grado',  i18n: 'topic-1', short: 'topic-1-short' },
  { key: 'Ecuaciones segundo grado', i18n: 'topic-2', short: 'topic-2-short' },
  { key: 'Sistemas de ecuaciones',   i18n: 'topic-3', short: 'topic-3-short' },
  { key: 'Problemas con ecuaciones', i18n: 'topic-4', short: 'topic-4-short' }
];

// ===== ESTADO GLOBAL =====
let estado = {
  nombreAlumno: '',
  totalPreguntas: 0,
  racha: 0,
  nivelActual: 'facil',
  temaActual: 'Ecuaciones primer grado',
  preguntaActual: null,
  historialReciente: [],
  ultimosErrores: [],
  estadisticasTemas: {
    'Ecuaciones primer grado':  { total: 0, correctas: 0, nivel: 'facil' },
    'Ecuaciones segundo grado': { total: 0, correctas: 0, nivel: 'facil' },
    'Sistemas de ecuaciones':   { total: 0, correctas: 0, nivel: 'facil' },
    'Problemas con ecuaciones': { total: 0, correctas: 0, nivel: 'facil' }
  },
  cargando: false,
  respondida: false,
  explicacionVisible: false,
  usadas: {}
};

const $ = id => document.getElementById(id);

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  cargarIdioma();
  aplicarIdioma();

  comprobarAlumnoVuelve();

  $('btn-comenzar').addEventListener('click', iniciarComoNuevo);
  $('input-nombre').addEventListener('keypress', e => { if (e.key === 'Enter') iniciarComoNuevo(); });
  $('btn-continuar').addEventListener('click', continuarProgreso);
  $('btn-nuevo-alumno').addEventListener('click', mostrarFormularioNuevo);
  $('btn-comprobar').addEventListener('click', comprobarRespuesta);
  $('answer-input').addEventListener('keypress', e => { if (e.key === 'Enter' && !estado.respondida) comprobarRespuesta(); });
  $('btn-siguiente').addEventListener('click', siguientePregunta);
  $('btn-explicacion').addEventListener('click', mostrarExplicacion);
  $('btn-reintentar').addEventListener('click', () => {
    $('error-card').style.display = 'none';
    siguientePregunta();
  });
  $('btn-reset').addEventListener('click', reiniciarProgreso);
});

// Callback que llama i18n.js cuando cambia el idioma
function onIdiomaChanged() {
  aplicarIdioma();
  // Re-renderizar elementos dinámicos si la app está activa
  if ($('app-screen').style.display !== 'none') {
    renderizarTopicNav();
    actualizarEstadisticas();
    actualizarRachaVisual();
    // Actualizar textos de botones dinámicos que no usan data-i18n
    if (!estado.respondida) {
      $('btn-comprobar').textContent = t('btn-check');
    }
    if (estado.explicacionVisible) {
      $('btn-explicacion').textContent = t('btn-explain-hide');
    } else if ($('btn-explicacion').style.display !== 'none') {
      $('btn-explicacion').textContent = t('btn-explain-show');
    }
  }
}

// ===== DETECCIÓN ALUMNO QUE VUELVE =====
function comprobarAlumnoVuelve() {
  try {
    const ultimo = localStorage.getItem('mategalderak_ultimo_alumno');
    if (ultimo) {
      const raw = localStorage.getItem('mategalderak_progreso_' + ultimo);
      if (raw) {
        $('returning-name').textContent = ultimo;
        $('returning-section').style.display = 'block';
        $('new-student-section').style.display = 'none';
        return;
      }
    }
  } catch (e) {}
  mostrarFormularioNuevo();
}

function mostrarFormularioNuevo() {
  $('returning-section').style.display = 'none';
  $('new-student-section').style.display = 'block';
  $('input-nombre').value = '';
  setTimeout(() => $('input-nombre').focus(), 50);
}

// ===== INICIAR APP =====
function iniciarComoNuevo() {
  const nombre = $('input-nombre').value.trim();
  if (!nombre) {
    mostrarToast(t('toast-no-name'));
    $('input-nombre').focus();
    return;
  }
  // Resetear estado para nuevo alumno (por si venía de otro)
  resetearEstado(nombre);
  // Si tiene progreso guardado, cargarlo; si no, empezar de cero
  cargarProgreso(nombre);
  lanzarApp();
}

function continuarProgreso() {
  const nombre = $('returning-name').textContent;
  resetearEstado(nombre);
  cargarProgreso(nombre);
  lanzarApp();
}

function resetearEstado(nombre) {
  estado.nombreAlumno = nombre;
  estado.totalPreguntas = 0;
  estado.racha = 0;
  estado.nivelActual = 'facil';
  estado.temaActual = 'Ecuaciones primer grado';
  estado.preguntaActual = null;
  estado.historialReciente = [];
  estado.ultimosErrores = [];
  estado.estadisticasTemas = {
    'Ecuaciones primer grado':  { total: 0, correctas: 0, nivel: 'facil' },
    'Ecuaciones segundo grado': { total: 0, correctas: 0, nivel: 'facil' },
    'Sistemas de ecuaciones':   { total: 0, correctas: 0, nivel: 'facil' },
    'Problemas con ecuaciones': { total: 0, correctas: 0, nivel: 'facil' }
  };
  estado.cargando = false;
  estado.respondida = false;
  estado.explicacionVisible = false;
  estado.usadas = {};
}

function lanzarApp() {
  $('welcome-screen').style.display = 'none';
  $('app-screen').style.display = 'block';

  $('avatar').textContent = estado.nombreAlumno.charAt(0).toUpperCase();
  $('student-name').textContent = estado.nombreAlumno;

  actualizarEstadisticas();
  renderizarTopicNav();
  siguientePregunta();
}

// ===== REINICIAR PROGRESO =====
function reiniciarProgreso() {
  if (!confirm(t('reset-confirm'))) return;
  try {
    localStorage.removeItem('mategalderak_progreso_' + estado.nombreAlumno);
    localStorage.removeItem('mategalderak_ultimo_alumno');
  } catch (e) {}
  mostrarToast(t('toast-progress-reset'));
  // Volver a bienvenida
  setTimeout(() => {
    $('app-screen').style.display = 'none';
    $('welcome-screen').style.display = 'flex';
    mostrarFormularioNuevo();
  }, 1200);
}

// ===== BANCO DE PREGUNTAS =====
const TEMA_A_BANCO = {
  'Ecuaciones primer grado':  'Lehenengo mailako ekuazioak',
  'Ecuaciones segundo grado': 'Bigarren mailako ekuazioak',
  'Sistemas de ecuaciones':   'Sistemak',
  'Problemas con ecuaciones': 'Buruketak'
};
const NIVEL_A_BANCO = { facil:'erraza', medio:'ertaina', dificil:'zaila', experto:'zaila' };
// Temas que no tienen nivel 'ertaina' en el banco
const TEMAS_SIN_ERTAINA = ['Sistemak', 'Buruketak'];

function elegirPreguntaDeBanco(temaKey, nivelApp) {
  const temaBanco = TEMA_A_BANCO[temaKey] || temaKey;
  let nivelBanco  = NIVEL_A_BANCO[nivelApp] || 'erraza';

  // Si el tema no tiene ertaina, usar erraza o zaila según dirección
  if (TEMAS_SIN_ERTAINA.includes(temaBanco) && nivelBanco === 'ertaina') {
    nivelBanco = (nivelApp === 'facil' || nivelApp === 'medio') ? 'erraza' : 'zaila';
  }

  const pool = QUESTIONS_BANK.filter(q => q.tema === temaBanco && q.dificultad === nivelBanco);
  if (!pool.length) throw new Error(`No hay preguntas para ${temaKey} (${nivelApp})`);

  const key = `${temaBanco}|${nivelBanco}`;
  if (!estado.usadas[key]) estado.usadas[key] = [];

  let disponibles = pool.filter(q => !estado.usadas[key].includes(q.id));
  if (!disponibles.length) {
    estado.usadas[key] = [];
    disponibles = pool;
  }

  const q = disponibles[Math.floor(Math.random() * disponibles.length)];
  estado.usadas[key].push(q.id);

  // Normalizar al formato que espera el resto de la app
  return {
    tema:                 temaKey,
    dificultad:           nivelApp,
    pregunta:             q.enunciado,
    respuestaCorrecta:    q.solucion,
    respuestasEquivalentes: [],
    pista:                '',
    explicacionCompleta:  '',
    _bancoid:             q.id
  };
}

// ===== SIGUIENTE PREGUNTA =====
function siguientePregunta() {
  if (estado.cargando) { mostrarToast(t('toast-loading')); return; }

  estado.respondida = false;
  estado.explicacionVisible = false;

  $('question-card').style.display = 'none';
  $('feedback-card').style.display = 'none';
  $('btn-siguiente').style.display = 'none';
  $('explanation-panel').style.display = 'none';
  $('btn-explicacion').style.display = 'none';
  $('error-card').style.display = 'none';
  $('loading-card').style.display = 'none';
  $('answer-input').value = '';
  $('answer-input').disabled = false;
  $('btn-comprobar').disabled = false;
  $('btn-comprobar').textContent = t('btn-check');

  try {
    const nivelActual = estado.estadisticasTemas[estado.temaActual]?.nivel || 'facil';
    const pregunta = elegirPreguntaDeBanco(estado.temaActual, nivelActual);
    estado.preguntaActual = pregunta;
    mostrarPregunta(pregunta);
  } catch (err) {
    console.error('Error eligiendo pregunta:', err);
    $('error-card').style.display = 'block';
    $('error-msg').textContent = err.message || t('error-msg-default');
  }
}

// ===== CAMBIAR TEMA (desde topic nav) =====
function cambiarTema(temaKey) {
  if (estado.cargando) { mostrarToast(t('toast-loading')); return; }
  if (temaKey === estado.temaActual && !estado.respondida && estado.preguntaActual) return;

  estado.temaActual = temaKey;
  renderizarTopicNav();
  mostrarToast(t('toast-topic-changed'));
  siguientePregunta();
}

// ===== MOSTRAR PREGUNTA =====
function mostrarPregunta(pregunta) {
  $('loading-card').style.display = 'none';

  // Tema (mostrar nombre traducido corto)
  const temaInfo = TEMAS.find(t => t.key === pregunta.tema) || TEMAS[0];
  $('badge-tema').textContent = t(temaInfo.short);
  $('badge-tema').className = 'meta-badge topic';

  // Dificultad
  $('badge-dificultad').className = `meta-badge difficulty-${pregunta.dificultad}`;
  $('badge-dificultad').textContent = t('diff-' + pregunta.dificultad);

  // Número de pregunta
  $('question-number').textContent = `${t('question-prefix')} #${estado.totalPreguntas + 1}`;

  // Texto
  $('question-text').textContent = pregunta.pregunta;

  // Placeholder del input
  $('answer-input').placeholder = pregunta.tema === 'Sistemas de ecuaciones'
    ? t('answer-ph-sistemas')
    : t('answer-ph');

  $('question-card').style.display = 'block';
  $('answer-input').focus();

  // Sincronizar tema actual con lo que generó la IA
  if (pregunta.tema !== estado.temaActual) {
    estado.temaActual = pregunta.tema;
    renderizarTopicNav();
  }
}

// ===== COMPROBAR RESPUESTA =====
function comprobarRespuesta() {
  if (estado.respondida || estado.cargando) return;

  const respuestaAlumno = $('answer-input').value.trim();
  if (!respuestaAlumno) {
    mostrarToast(t('toast-no-answer'));
    $('answer-input').focus();
    return;
  }

  estado.respondida = true;
  $('answer-input').disabled = true;
  $('btn-comprobar').disabled = true;

  const pregunta = estado.preguntaActual;
  const resultado = evaluarRespuesta(
    pregunta.pregunta,
    respuestaAlumno,
    pregunta.respuestaCorrecta,
    pregunta.respuestasEquivalentes
  );
  const correcto = resultado.correcto;

  registrarRespuesta(pregunta, respuestaAlumno, correcto);
  mostrarFeedback(correcto, pregunta, respuestaAlumno);
}

// ===== REGISTRAR RESPUESTA =====
function registrarRespuesta(pregunta, respuestaAlumno, correcto) {
  estado.totalPreguntas++;

  estado.racha = correcto
    ? (estado.racha > 0 ? estado.racha + 1 : 1)
    : (estado.racha < 0 ? estado.racha - 1 : -1);

  const stats = estado.estadisticasTemas[pregunta.tema];
  if (stats) {
    stats.total++;
    if (correcto) stats.correctas++;

    const pct = (stats.correctas / stats.total) * 100;
    if (stats.total >= 3) {
      if (pct >= 85 && stats.nivel !== 'experto') stats.nivel = subirNivel(stats.nivel);
      else if (pct < 40 && stats.nivel !== 'facil') stats.nivel = bajarNivel(stats.nivel);
    }
  }

  // Nivel global
  const totalC = Object.values(estado.estadisticasTemas).reduce((s, t) => s + t.correctas, 0);
  const totalT = Object.values(estado.estadisticasTemas).reduce((s, t) => s + t.total, 0);
  if (totalT >= 5) {
    const pG = (totalC / totalT) * 100;
    estado.nivelActual = pG >= 80 ? 'dificil' : pG >= 60 ? 'medio' : 'facil';
  }

  const registro = { tema: pregunta.tema, dificultad: pregunta.dificultad,
    pregunta: pregunta.pregunta, respuestaAlumno, respuestaCorrecta: pregunta.respuestaCorrecta, correcto };

  estado.historialReciente.push(registro);
  if (estado.historialReciente.length > 20) estado.historialReciente.shift();

  if (!correcto) {
    estado.ultimosErrores.push(registro);
    if (estado.ultimosErrores.length > 10) estado.ultimosErrores.shift();
  }

  actualizarEstadisticas();
  renderizarTopicNav();
  guardarProgreso();
}

// ===== MOSTRAR FEEDBACK =====
function mostrarFeedback(correcto, pregunta, respuestaAlumno) {
  const card = $('feedback-card');
  card.className = `feedback-card ${correcto ? 'correct' : 'incorrect'}`;

  $('feedback-icon').textContent = correcto ? '🎉' : '🤔';
  $('feedback-title').textContent = correcto ? t('feedback-correct-title') : t('feedback-wrong-title');

  if (correcto) {
    const msgs = t('feedback-correct-msgs');
    const nameMsg = t('feedback-correct-name').replace('{name}', estado.nombreAlumno);
    const todas = [...msgs, nameMsg];
    $('feedback-message').textContent = todas[Math.floor(Math.random() * todas.length)];
    $('btn-explicacion').style.display = 'none';
  } else {
    $('feedback-message').textContent =
      `${t('feedback-your-answer')}: "${respuestaAlumno}"  ·  ${t('feedback-right-answer')}: "${pregunta.respuestaCorrecta}"`;
    $('btn-explicacion').textContent = t('btn-explain-show');
    $('btn-explicacion').style.display = 'inline-flex';
    $('explanation-panel').style.display = 'none';
  }

  card.style.display = 'block';
  $('btn-siguiente').style.display = 'block';
  actualizarRachaVisual();
}

// ===== MOSTRAR EXPLICACIÓN =====
async function mostrarExplicacion() {
  if (estado.explicacionVisible) {
    $('explanation-panel').style.display = 'none';
    estado.explicacionVisible = false;
    $('btn-explicacion').textContent = t('btn-explain-show');
    return;
  }

  $('btn-explicacion').textContent = t('btn-explain-loading');
  $('btn-explicacion').disabled = true;

  const pregunta = estado.preguntaActual;
  const ultimoError = estado.ultimosErrores[estado.ultimosErrores.length - 1];
  const respAlumno = ultimoError ? ultimoError.respuestaAlumno : '?';

  let explicacion;
  try {
    explicacion = await generarExplicacionError(
      pregunta.pregunta,
      respAlumno,
      pregunta.respuestaCorrecta,
      pregunta.explicacionCompleta || '',
      idiomaActual,
      pregunta.tema
    );
  } catch (err) {
    explicacion = pregunta.explicacionCompleta || '';
    if (!explicacion) {
      mostrarToast(t('toast-explain-err'));
      $('btn-explicacion').disabled = false;
      $('btn-explicacion').textContent = t('btn-explain-show');
      return;
    }
  }

  renderizarExplicacion(explicacion);
  $('explanation-panel').style.display = 'block';
  estado.explicacionVisible = true;
  $('btn-explicacion').textContent = t('btn-explain-hide');
  $('btn-explicacion').disabled = false;
}

// ===== RENDERIZAR EXPLICACIÓN =====
function renderizarExplicacion(texto) {
  const content = $('explanation-content');
  const lineas  = texto.split('\n').filter(l => l.trim());
  let html = '';
  let stepCount = 0;

  for (const linea of lineas) {
    const l = linea.trim();

    if (l.startsWith('ERROR:')) {
      html += `<div style="background:#fff3cd;border-left:4px solid #f59e0b;padding:9px 13px;border-radius:6px;margin-bottom:10px;font-size:13px;">
        <strong>⚠️ ${t('expl-error-label')}</strong> ${escHtml(l.replace('ERROR:', '').trim())}
      </div>`;
      stepCount = 0;

    } else if (l.startsWith('CONCLUSIÓN:') || l.startsWith('CONCLUSION:')) {
      const txt = l.replace(/CONCLUSI[ÓO]N:/i, '').trim();
      html += `<div style="background:#d1fae5;border-left:4px solid #10b981;padding:9px 13px;border-radius:6px;margin-top:10px;font-size:14px;font-weight:700;">
        ✅ ${escHtml(txt)}
      </div>`;

    } else if (l.startsWith('SOLUCIÓN:') || l.startsWith('SOLUCION:')) {
      html += `<p style="font-weight:700;margin:12px 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.4px;">${t('expl-solution-label')}</p>`;
      stepCount = 0;

    // Sección especial: EGIAZTAPENA (verificación, solo 1er grado)
    } else if (l.startsWith('EGIAZTAPENA:') || l.startsWith('EGIAZTAPEN:')) {
      const txt = l.replace(/EGIAZTAPEN[A]?:/i, '').trim();
      html += `<div style="background:#eff6ff;border-left:4px solid #6366f1;padding:9px 13px;border-radius:6px;margin:10px 0 6px;font-size:13px;">
        <strong>🔍 Egiaztapena:</strong> ${escHtml(txt)}
      </div>`;

    // Secciones de buruketak (problemas)
    } else if (l.startsWith('DATUAK:') || l === 'DATUAK') {
      html += `<p style="font-weight:700;margin:12px 0 4px;color:#7c3aed;font-size:12px;text-transform:uppercase;letter-spacing:0.4px;">📋 Datuak:</p>`;

    } else if (l.startsWith('ERAGIKETAK:') || l === 'ERAGIKETAK') {
      html += `<p style="font-weight:700;margin:12px 0 4px;color:#7c3aed;font-size:12px;text-transform:uppercase;letter-spacing:0.4px;">🔢 Eragiketak:</p>`;
      stepCount = 0;

    } else if (l.startsWith('ERANTZUNA:') || l === 'ERANTZUNA') {
      const txt = l.replace('ERANTZUNA:', '').trim();
      if (txt) {
        html += `<div style="background:#faf5ff;border-left:4px solid #7c3aed;padding:9px 13px;border-radius:6px;margin-top:10px;font-size:14px;font-weight:600;">
          💡 Erantzuna: ${escHtml(txt)}
        </div>`;
      } else {
        html += `<p style="font-weight:700;margin:12px 0 4px;color:#7c3aed;font-size:12px;text-transform:uppercase;letter-spacing:0.4px;">💡 Erantzuna:</p>`;
      }

    // Líneas con * (datos en buruketak)
    } else if (l.startsWith('*') || l.startsWith('→')) {
      html += `<p style="margin:3px 0 3px 8px;font-size:13px;color:#374151;">${escHtml(l)}</p>`;

    // Pasos numerados
    } else if (/^\d+[.)]\s/.test(l)) {
      stepCount++;
      const num = l.match(/^(\d+)/)[1];
      const txt = escHtml(l.replace(/^\d+[.)]\s*/, '').trim());
      html += `<div class="step"><div class="step-number">${num}</div><div class="step-text">${txt}</div></div>`;

    // Texto {a=N, b=N, c=N} (identificación de coeficientes)
    } else if (l.includes('a =') || l.includes('a=') || l.includes('{a')) {
      html += `<div style="background:#f8f7ff;border:1px solid #c4b5fd;padding:6px 12px;border-radius:6px;margin:6px 0;font-size:13px;font-family:monospace;">
        ${escHtml(l)}
      </div>`;

    } else if (l) {
      html += `<p style="margin-bottom:6px;font-size:14px;">${escHtml(l)}</p>`;
    }
  }

  content.innerHTML = html || `<p style="font-size:14px;">${escHtml(texto)}</p>`;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ===== TOPIC NAV =====
function renderizarTopicNav() {
  const container = $('topic-nav');
  container.innerHTML = '';

  for (const tema of TEMAS) {
    const datos = estado.estadisticasTemas[tema.key];
    const pct = datos.total > 0 ? Math.round((datos.correctas / datos.total) * 100) : null;
    const esActivo = tema.key === estado.temaActual;
    const colorClass = pct === null ? 'none' : pct >= 70 ? 'high' : pct >= 40 ? 'mid' : 'low';
    const pctTexto = pct !== null
      ? `${pct}% <span style="font-size:11px;font-weight:500;color:var(--text-muted)">(${datos.total} ${t('accuracy-qs')})</span>`
      : `<span style="color:var(--text-muted);font-size:13px;">—</span>`;

    const btn = document.createElement('button');
    btn.className = `topic-btn${esActivo ? ' active' : ''}`;
    btn.innerHTML = `
      <div class="topic-btn-name">${t(tema.short)}</div>
      <div class="topic-btn-meta">
        <div class="topic-btn-pct">${pctTexto}</div>
        <div class="topic-btn-nivel ${datos.nivel}">${t('diff-' + datos.nivel)}</div>
      </div>
      <div class="topic-btn-bar">
        <div class="topic-btn-fill ${colorClass}" style="width:${pct ?? 0}%"></div>
      </div>`;
    btn.addEventListener('click', () => cambiarTema(tema.key));
    container.appendChild(btn);
  }
}

// ===== ACTUALIZAR ESTADÍSTICAS =====
function actualizarEstadisticas() {
  const totalC = Object.values(estado.estadisticasTemas).reduce((s, t) => s + t.correctas, 0);
  const totalT = estado.totalPreguntas;
  const pct = totalT > 0 ? Math.round((totalC / totalT) * 100) : 0;

  $('stat-total').textContent = totalT;
  $('stat-correctas').textContent = totalC;
  $('stat-pct').textContent = pct + '%';

  const rachaEl = $('stat-racha');
  rachaEl.textContent = estado.racha > 0 ? `+${estado.racha}` : estado.racha.toString();
  rachaEl.style.color = estado.racha > 0 ? '#10b981' : estado.racha < 0 ? '#ef4444' : '#64748b';

  $('progress-fill').style.width = pct + '%';
  $('progress-label-pct').textContent = pct + '%';
}

function actualizarRachaVisual() {
  const badge = $('streak-badge');
  if (estado.racha > 1) {
    badge.textContent = `🔥 ${estado.racha} ${t('streak-correct')}`;
    badge.style.background = 'linear-gradient(135deg, #f59e0b, #ef4444)';
    badge.style.display = 'flex';
  } else if (estado.racha < -1) {
    badge.textContent = `❄️ ${Math.abs(estado.racha)} ${t('streak-wrong')}`;
    badge.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// ===== HELPERS =====
function subirNivel(n) { return { facil:'medio', medio:'dificil', dificil:'experto', experto:'experto' }[n] || n; }
function bajarNivel(n) { return { experto:'dificil', dificil:'medio', medio:'facil', facil:'facil' }[n] || n; }

function mostrarToast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
}

// ===== PERSISTENCIA =====
function guardarProgreso() {
  try {
    const datos = {
      nombreAlumno:     estado.nombreAlumno,
      totalPreguntas:   estado.totalPreguntas,
      racha:            estado.racha,
      nivelActual:      estado.nivelActual,
      temaActual:       estado.temaActual,
      estadisticasTemas: estado.estadisticasTemas,
      historialReciente: estado.historialReciente.slice(-15),
      ultimosErrores:   estado.ultimosErrores.slice(-8),
      usadas:           estado.usadas
    };
    const key = 'mategalderak_progreso_' + estado.nombreAlumno;
    localStorage.setItem(key, JSON.stringify(datos));
    localStorage.setItem('mategalderak_ultimo_alumno', estado.nombreAlumno);
  } catch (e) {}
}

function cargarProgreso(nombre) {
  try {
    const raw = localStorage.getItem('mategalderak_progreso_' + nombre);
    if (!raw) return false;
    const datos = JSON.parse(raw);
    // Fusionar con el estado actual (que ya tiene los defaults)
    Object.assign(estado, datos);
    // Asegurar que estadisticasTemas tiene todos los temas aunque el guardado sea antiguo
    for (const { key } of TEMAS) {
      if (!estado.estadisticasTemas[key]) {
        estado.estadisticasTemas[key] = { total: 0, correctas: 0, nivel: 'facil' };
      }
    }
    if (!estado.usadas) estado.usadas = {};
    return true;
  } catch (e) {
    return false;
  }
}
