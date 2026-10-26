// Ejercicio 1: La poción mágica de Alicia (secuencial + if/else if/else)
const ALTURA_PUERTA = 60;   // cm
const ML_MINIMO = 1;
const ML_MAXIMO = 90;
const ALTURA_MAXIMA = 300;  // cm

const formPocion = document.getElementById("form-pocion");
const salidaPocion = document.getElementById("resultado-pocion");

// Regla: cada ml reduce 1 % de la altura inicial
function calcularNuevaAltura(altura, ml) {
  const nueva = altura - (altura * ml) / 100;
  return Math.round(nueva * 100) / 100; // 2 decimales
}

formPocion.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita recargar la página

  const textoAltura = document.getElementById("altura").value.trim();
  const textoMl = document.getElementById("pocion").value.trim();
  const altura = Number(textoAltura);
  const ml = Number(textoMl);

  if (textoAltura === "" || textoMl === "" || isNaN(altura) || isNaN(ml)) {
    mostrarMensaje(salidaPocion, "Completa los dos campos con números.", "error");
  } else if (altura <= 0 || altura > ALTURA_MAXIMA) {
    mostrarMensaje(salidaPocion, "La altura debe ser mayor que 0 y no pasar de " + ALTURA_MAXIMA + " cm.", "error");
  } else if (ml < ML_MINIMO || ml > ML_MAXIMO) {
    mostrarMensaje(salidaPocion, "La poción debe estar entre " + ML_MINIMO + " y " + ML_MAXIMO + " ml.", "error");
  } else {
    const nuevaAltura = calcularNuevaAltura(altura, ml);
    if (nuevaAltura <= ALTURA_PUERTA) {
      mostrarMensaje(salidaPocion, "Altura final: " + nuevaAltura + " cm.\n¡Alicia puede pasar por la puerta!", "ok");
    } else {
      mostrarMensaje(salidaPocion, "Altura final: " + nuevaAltura + " cm.\nAlicia todavía no puede pasar: la puerta mide " + ALTURA_PUERTA + " cm.", "error");
    }
  }
});
