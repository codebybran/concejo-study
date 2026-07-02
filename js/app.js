// app.js - Concejo Study
// Lógica compartida entre páginas

/**
 * Calcula el total de preguntas sumando todos los módulos de EXAMENES
 */
function getTotalPreguntas() {
  if (typeof EXAMENES === 'undefined') return 0;
  return Object.values(EXAMENES).reduce((acc, arr) => acc + arr.length, 0);
}

/**
 * Lee el progreso guardado en localStorage
 */
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('cs_progress') || '{}');
  } catch(e) {
    return {};
  }
}

/**
 * Guarda progreso de un módulo (local + Firestore)
 */
function saveProgress(capId) {
  const progress = getProgress();
  progress[capId] = 'done';
  localStorage.setItem('cs_progress', JSON.stringify(progress));
  syncToFirestore('saveProgreso', progress);
}

/**
 * Resetea todo el progreso
 */
function resetProgress() {
  localStorage.removeItem('cs_progress');
  syncToFirestore('saveProgreso', {});
}

/* ============================================================
   SINCRONIZACIÓN CON FIRESTORE
   ============================================================ */

/**
 * Llama a una función de window.CS_FIREBASE si está disponible
 * (es decir, si firebase.js ya cargó y el usuario tiene sesión).
 * No bloquea nunca la experiencia local: si falla o no hay
 * conexión, simplemente se queda el dato en localStorage y punto.
 */
function syncToFirestore(metodo, valor) {
  if (typeof window === 'undefined' || !window.CS_FIREBASE) return;
  const fn = window.CS_FIREBASE[metodo];
  if (typeof fn !== 'function') return;
  fn(valor).catch(err => {
    console.warn(`No se pudo sincronizar "${metodo}" con Firestore (se mantiene guardado localmente):`, err);
  });
}

/* ============================================================
   REPASO DE ERRORES
   ============================================================ */

/**
 * Lee el banco de errores guardado en localStorage
 * Estructura: { "capId-preguntaHash": { capId, p, ops, r, fallos } }
 */
function getErrores() {
  try {
    return JSON.parse(localStorage.getItem('cs_errores') || '{}');
  } catch(e) {
    return {};
  }
}

function saveErrores(errores) {
  localStorage.setItem('cs_errores', JSON.stringify(errores));
  syncToFirestore('saveErrores', errores);
}

/**
 * Genera un identificador único y estable para una pregunta
 * (usamos el texto de la pregunta, que no cambia entre módulos)
 */
function hashPregunta(p) {
  let hash = 0;
  for (let i = 0; i < p.length; i++) {
    hash = ((hash << 5) - hash) + p.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString();
}

/**
 * Registra que el usuario falló una pregunta.
 * Si ya estaba en el banco, incrementa el contador de fallos.
 */
function registrarError(capId, pregunta) {
  const errores = getErrores();
  const key = capId + '-' + hashPregunta(pregunta.p);
  if (errores[key]) {
    errores[key].fallos += 1;
  } else {
    errores[key] = {
      capId: capId,
      p: pregunta.p,
      ops: pregunta.ops,
      r: pregunta.r,
      fallos: 1
    };
  }
  saveErrores(errores);
}

/**
 * Quita una pregunta del banco de errores (el usuario ya la dominó)
 */
function resolverError(capId, pregunta) {
  const errores = getErrores();
  const key = capId + '-' + hashPregunta(pregunta.p);
  if (errores[key]) {
    delete errores[key];
    saveErrores(errores);
  }
}

/**
 * Cuenta cuántas preguntas hay actualmente en el banco de errores
 */
function contarErrores() {
  return Object.keys(getErrores()).length;
}

/**
 * Devuelve las preguntas del banco de errores como array,
 * listas para usarse en el motor de examen existente
 */
function getPreguntasError() {
  const errores = getErrores();
  return Object.values(errores).map(e => ({
    p: e.p,
    ops: e.ops,
    r: e.r,
    _capId: e.capId   // guardamos de qué módulo viene, por si se quiere mostrar
  }));
}