// examenes.js - Concejo Study
// Banco de preguntas por módulo
// Este archivo es cargado por capitulo.html junto con contenido.js
// Las preguntas están dentro de EXAMENES en contenido.js
// Este archivo contiene funciones auxiliares para el manejo del examen

/**
 * Obtiene preguntas aleatorias de un módulo
 * @param {number} capId - ID del capítulo
 * @param {number} cantidad - Cantidad de preguntas a retornar (máx 20)
 */
function getPreguntasAleatorias(capId, cantidad = 20) {
  const todas = EXAMENES[capId] || [];
  const mezcladas = [...todas].sort(() => Math.random() - 0.5);
  return mezcladas.slice(0, Math.min(cantidad, mezcladas.length));
}

/**
 * Calcula el puntaje de un examen
 * @param {Array} preguntas - Las preguntas del examen
 * @param {Object} respuestas - Objeto {indice: opcionElegida}
 */
function calcularPuntaje(preguntas, respuestas) {
  const correctas = preguntas.filter((q, i) => respuestas[i] === q.r).length;
  return {
    correctas,
    total: preguntas.length,
    porcentaje: Math.round((correctas / preguntas.length) * 100),
    aprobado: Math.round((correctas / preguntas.length) * 100) >= 67
  };
}

/**
 * Retorna el total de preguntas en todos los módulos
 */
function getTotalPreguntas() {
  if (typeof EXAMENES === 'undefined') return 0;
  return Object.values(EXAMENES).reduce((acc, arr) => acc + arr.length, 0);
}