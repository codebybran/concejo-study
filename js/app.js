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
 * Guarda progreso de un módulo
 */
function saveProgress(capId) {
  const progress = getProgress();
  progress[capId] = 'done';
  localStorage.setItem('cs_progress', JSON.stringify(progress));
}

/**
 * Resetea todo el progreso
 */
function resetProgress() {
  localStorage.removeItem('cs_progress');
}