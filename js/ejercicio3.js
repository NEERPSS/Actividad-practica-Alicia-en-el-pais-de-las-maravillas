// Ejercicio 3: El desafío de la Reina de Corazones (for + if)
const MAX_CARTAS = 100;

const formReina = document.getElementById("form-reina");
const salidaReina = document.getElementById("resultado-reina");

formReina.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = document.getElementById("cartas").value.trim();
  const cantidad = Number(texto);

  if (texto === "" || !Number.isInteger(cantidad) || cantidad < 1 || cantidad > MAX_CARTAS) {
    mostrarMensaje(salidaReina, "Escribe un número entero entre 1 y " + MAX_CARTAS + ".", "error");
    return;
  }

  let cantidadPares = 0, sumaPares = 0;
  let cantidadImpares = 0, sumaImpares = 0;
  const secuencia = [];

  for (let numero = 1; numero <= cantidad; numero++) {
    if (numero % 2 === 0) {
      cantidadPares++;
      sumaPares += numero;
      secuencia.push(numero + " (par)");
    } else {
      cantidadImpares++;
      sumaImpares += numero;
      secuencia.push(numero + " (impar)");
    }
  }

  let ganador;
  if (sumaPares > sumaImpares) {
    ganador = "Los pares tienen la mayor suma.";
  } else if (sumaImpares > sumaPares) {
    ganador = "Los impares tienen la mayor suma.";
  } else {
    ganador = "Hay empate entre pares e impares.";
  }

  mostrarMensaje(salidaReina,
    "Secuencia: " + secuencia.join(", ") + "\n" +
    "Pares: " + cantidadPares + " cartas, suma " + sumaPares + "\n" +
    "Impares: " + cantidadImpares + " cartas, suma " + sumaImpares + "\n" +
    ganador, "ok");
});
