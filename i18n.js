// ===== SISTEMA DE TRADUCCIÓN =====
// Los nombres internos de los temas siempre en español (para que el JSON de la IA sea consistente).
// Solo la UI y los textos generados por la IA se traducen.

const TRADUCCIONES = {
  es: {
    // Welcome
    'welcome-subtitle':       'Banco de preguntas adaptativo · Matemáticas 3º ESO<br>El sistema aprende contigo y sube la dificultad.',
    'welcome-label-nombre':   '¿Cómo te llamas?',
    'welcome-ph-nombre':      'Escribe tu nombre...',
    'welcome-btn-start':      '¡Empezar a practicar! →',
    'welcome-footer':         'Temas: Ecuaciones 1º y 2º grado · Sistemas · Problemas',
    'welcome-returning-hi':   '¡Bienvenido/a de nuevo!',
    'welcome-btn-continue':   'Continuar donde lo dejé →',
    'welcome-btn-new':        'Soy otro alumno',
    // Header / settings
    'btn-reset':              'Reiniciar progreso',
    'reset-confirm':          '¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.',
    'btn-lang-switch':        '🌐 Euskera',
    // Stats
    'stat-preguntas':         'Preguntas',
    'stat-correctas':         'Correctas',
    'stat-precision':         'Precisión',
    'stat-racha':             'Racha',
    'progress-label':         'Progreso global',
    // Topic nav
    'topics-title':           'Elige un tema',
    'topic-1':                'Ecuaciones primer grado',
    'topic-2':                'Ecuaciones segundo grado',
    'topic-3':                'Sistemas de ecuaciones',
    'topic-4':                'Problemas con ecuaciones',
    'topic-1-short':          'Ec. 1er grado',
    'topic-2-short':          'Ec. 2º grado',
    'topic-3-short':          'Sistemas',
    'topic-4-short':          'Problemas',
    // Difficulty
    'diff-facil':             'Fácil',
    'diff-medio':             'Medio',
    'diff-dificil':           'Difícil',
    'diff-experto':           'Experto',
    // Loading / error
    'loading-text':           'Generando tu próxima pregunta...',
    'error-title':            '⚠️ Error de conexión',
    'error-msg-default':      'No se pudo conectar. Revisa tu conexión a internet.',
    'btn-retry':              'Volver a intentar',
    // Question
    'question-prefix':        'Pregunta',
    'answer-ph':              'Escribe tu respuesta...',
    'answer-ph-sistemas':     'Ej: x=2, y=3',
    'btn-check':              'Comprobar',
    'btn-checking':           'Comprobando...',
    // Feedback
    'feedback-correct-title': '¡Correcto!',
    'feedback-wrong-title':   'No es correcto',
    'feedback-correct-msgs':  [
      '¡Muy bien! Sigue así.',
      '¡Excelente trabajo!',
      '¡Perfecto! Lo has resuelto correctamente.',
      '¡Eso es! Muy buen trabajo.'
    ],
    'feedback-correct-name':  '¡Genial, {name}!',
    'feedback-your-answer':   'Tu respuesta',
    'feedback-right-answer':  'Respuesta correcta',
    // Explanation
    'btn-explain-show':       '📖 Ver explicación paso a paso',
    'btn-explain-hide':       '🔼 Ocultar explicación',
    'btn-explain-loading':    'Cargando explicación...',
    'explanation-title':      'Explicación detallada',
    'expl-solution-label':    'Solución paso a paso:',
    'expl-error-label':       'Tu error:',
    // Next
    'btn-next':               'Siguiente pregunta →',
    // Streak
    'streak-correct':         'seguidas',
    'streak-wrong':           'fallos',
    // Accuracy
    'accuracy-qs':            'pregs.',
    // Toasts
    'toast-no-name':          'Por favor, escribe tu nombre',
    'toast-no-answer':        'Escribe tu respuesta primero',
    'toast-explain-err':      'Error cargando la explicación',
    'toast-progress-reset':   'Progreso eliminado',
    'toast-loading':          'Espera, generando pregunta...',
    'toast-topic-changed':    'Tema cambiado',
    // AI prompt language instruction (appended to prompts)
    'ai-lang-instruction':    'Escribe el texto de las preguntas y explicaciones en ESPAÑOL (castellano).',
    'ai-lang-error-prefixes': 'Usa exactamente los prefijos: ERROR:, SOLUCIÓN:, CONCLUSIÓN:',
  },

  eu: {
    // Welcome
    'welcome-subtitle':       'Galdera-banku moldagarria · DBH 3ko Matematika<br>Sistemak zurekin ikasten du eta mailara egokitzen da.',
    'welcome-label-nombre':   'Nola duzu izena?',
    'welcome-ph-nombre':      'Idatzi zure izena...',
    'welcome-btn-start':      'Hasi praktikatzen! →',
    'welcome-footer':         'Gaiak: 1. eta 2. mailako ekuazioak · Sistemak · Problemak',
    'welcome-returning-hi':   'Ongi etorri berriro!',
    'welcome-btn-continue':   'Jarraitu utzi nuen tokitik →',
    'welcome-btn-new':        'Beste ikasle bat naiz',
    // Header / settings
    'btn-reset':              'Aurrerakuntza berrezarri',
    'reset-confirm':          'Ziur zaude zure aurrerapen guztia ezabatu nahi duzula? Ekintza hau ezin da desegin.',
    'btn-lang-switch':        '🌐 Castellano',
    // Stats
    'stat-preguntas':         'Galderak',
    'stat-correctas':         'Zuzenak',
    'stat-precision':         'Zehaztasuna',
    'stat-racha':             'Segida',
    'progress-label':         'Aurrerapen globala',
    // Topic nav
    'topics-title':           'Aukeratu gai bat',
    'topic-1':                'Lehen mailako ekuazioak',
    'topic-2':                'Bigarren mailako ekuazioak',
    'topic-3':                'Ekuazio-sistemak',
    'topic-4':                'Ekuazioekin problemak',
    'topic-1-short':          '1. mailako ek.',
    'topic-2-short':          '2. mailako ek.',
    'topic-3-short':          'Sistemak',
    'topic-4-short':          'Problemak',
    // Difficulty
    'diff-facil':             'Erraza',
    'diff-medio':             'Ertaina',
    'diff-dificil':           'Zaila',
    'diff-experto':           'Aditu',
    // Loading / error
    'loading-text':           'Zure hurrengo galdera sortzen...',
    'error-title':            '⚠️ Konexio akatsa',
    'error-msg-default':      'Ezin izan da konektatu. Egiaztatu Interneteko konexioa.',
    'btn-retry':              'Berriro saiatu',
    // Question
    'question-prefix':        'Galdera',
    'answer-ph':              'Idatzi zure erantzuna...',
    'answer-ph-sistemas':     'Adib: x=2, y=3',
    'btn-check':              'Egiaztatu',
    'btn-checking':           'Egiaztatzen...',
    // Feedback
    'feedback-correct-title': 'Zuzena!',
    'feedback-wrong-title':   'Ez da zuzena',
    'feedback-correct-msgs':  [
      'Oso ondo! Jarraitu horrela.',
      'Lan bikaina!',
      'Ezin hobeto! Ondo ebatzi duzu.',
      'Hori da! Lan oso ona.'
    ],
    'feedback-correct-name':  'Zoragarria, {name}!',
    'feedback-your-answer':   'Zure erantzuna',
    'feedback-right-answer':  'Erantzun zuzena',
    // Explanation
    'btn-explain-show':       '📖 Ikusi azalpena pausoz pauso',
    'btn-explain-hide':       '🔼 Ezkutatu azalpena',
    'btn-explain-loading':    'Azalpena kargatzen...',
    'explanation-title':      'Azalpen zehatza',
    'expl-solution-label':    'Ebazpena pausoz pauso:',
    'expl-error-label':       'Zure akatsa:',
    // Next
    'btn-next':               'Hurrengo galdera →',
    // Streak
    'streak-correct':         'segidan',
    'streak-wrong':           'huts',
    // Accuracy
    'accuracy-qs':            'gald.',
    // Toasts
    'toast-no-name':          'Mesedez, idatzi zure izena',
    'toast-no-answer':        'Lehenik idatzi zure erantzuna',
    'toast-explain-err':      'Errorea azalpena kargatzean',
    'toast-progress-reset':   'Aurrerakuntza ezabatuta',
    'toast-loading':          'Itxaron, galdera sortzen...',
    'toast-topic-changed':    'Gaia aldatuta',
    // AI prompt language instruction
    'ai-lang-instruction':    'Idatzi galderen eta azalpenen testua EUSKARAZ.',
    'ai-lang-error-prefixes': 'Erabili beti prefixo hauek: ERROR:, SOLUCIÓN:, CONCLUSIÓN: (euskarazko testuan ere bai, aldatu gabe).',
  }
};

let idiomaActual = 'es';

function t(key) {
  return TRADUCCIONES[idiomaActual]?.[key] ?? TRADUCCIONES['es']?.[key] ?? key;
}

function aplicarIdioma() {
  // Textos simples
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // Textos con HTML (subtítulo con <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  // Botón de idioma: muestra el idioma al que vas a cambiar
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.textContent = t('btn-lang-switch');
  });
}

function setIdioma(lang) {
  idiomaActual = lang;
  try { localStorage.setItem('mategalderak_idioma', lang); } catch (e) {}
  aplicarIdioma();
  // Notificar a app.js para re-renderizar elementos dinámicos
  if (typeof onIdiomaChanged === 'function') onIdiomaChanged();
}

function cargarIdioma() {
  try {
    const saved = localStorage.getItem('mategalderak_idioma');
    if (saved === 'eu' || saved === 'es') idiomaActual = saved;
  } catch (e) {}
}

function toggleIdioma() {
  setIdioma(idiomaActual === 'es' ? 'eu' : 'es');
}
