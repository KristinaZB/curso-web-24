let contador;

// Contador a cero
contador = 0;


// Tenemos que identificar todos los elementos HTML que vayamos a manipular con JS
// Los guardamos en variables:
let Sumar = document.getElementById('sumar');
let Restar = document.getElementById('Restar');
let pTotal = document.getElementById('total');
let Completo = document.getElementById('completo');

// las funciones son bloques de código reutilizables que podemos llamar a voluntad

function sumar() {
if (contador < 20) contador++;
resultado();
}

function restar() {
  if (contador > 0) contador--;
    resultado();
}

function resultado() {
    pTotal.innerHTML = contador;
    // Cada vez que ejecutamos esta función el párrafo HTML se actualiza con el valor del contador
}

