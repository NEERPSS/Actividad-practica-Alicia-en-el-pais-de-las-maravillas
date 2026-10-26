// Función compartida: muestra un mensaje en la página.
// tipo: "ok" o "error" (cambia el color en CSS)
function mostrarMensaje(elemento, mensaje, tipo) {
  elemento.textContent = mensaje;
  elemento.className = "resultado " + tipo;
}
