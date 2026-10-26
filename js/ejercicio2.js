// Ejercicio 2: La merienda del Sombrerero Loco (switch + if)
const MAX_TAZAS = 20;
const TAZAS_PARA_DESCUENTO = 5;
const PORCENTAJE_DESCUENTO = 10;

const formMerienda = document.getElementById("form-merienda");
const salidaMerienda = document.getElementById("resultado-merienda");

// Devuelve el precio unitario (Bs) según la bebida elegida
function obtenerPrecio(bebida) {
  let precio;
  switch (bebida) {
    case "te":        precio = 8;  break;
    case "chocolate": precio = 12; break;
    case "cafe":      precio = 10; break;
    case "limonada":  precio = 7;  break;
    default:          precio = 0;
  }
  return precio;
}

formMerienda.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("invitado").value.trim();
  const selector = document.getElementById("bebida");
  const bebida = selector.value;
  const textoTazas = document.getElementById("tazas").value.trim();
  const tazas = Number(textoTazas);

  if (nombre === "") {
    mostrarMensaje(salidaMerienda, "Escribe el nombre del invitado.", "error");
  } else if (bebida === "") {
    mostrarMensaje(salidaMerienda, "Elige una bebida.", "error");
  } else if (textoTazas === "" || !Number.isInteger(tazas) || tazas < 1 || tazas > MAX_TAZAS) {
    mostrarMensaje(salidaMerienda, "Las tazas deben ser un número entero entre 1 y " + MAX_TAZAS + ".", "error");
  } else {
    const nombreBebida = selector.options[selector.selectedIndex].getAttribute("data-nombre");
    const precioUnitario = obtenerPrecio(bebida);
    const subtotal = precioUnitario * tazas;
    let descuento = 0;
    if (tazas >= TAZAS_PARA_DESCUENTO) {
      descuento = (subtotal * PORCENTAJE_DESCUENTO) / 100;
    }
    const total = subtotal - descuento;

    mostrarMensaje(salidaMerienda,
      "Invitado: " + nombre + "\n" +
      "Bebida: " + nombreBebida + "\n" +
      "Tazas: " + tazas + "\n" +
      "Precio unitario: Bs " + precioUnitario.toFixed(2) + "\n" +
      "Subtotal: Bs " + subtotal.toFixed(2) + "\n" +
      "Descuento: Bs " + descuento.toFixed(2) + "\n" +
      "Total: Bs " + total.toFixed(2), "ok");
  }
});
