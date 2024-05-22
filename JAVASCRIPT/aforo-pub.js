
// INICIO
let contador;
let aforo;

// Contador a cero
contador = 0;
aforo = 20;


// Tenemos que identificar todos los elementos HTML que vayamos a manipular con JS
// Los guardamos en variables:
let Sumar = document.getElementById('sumar');
let Restar = document.getElementById('restar');
let pTotal = document.getElementById('total');
let pCompleto = document.getElementById('completo');

// las funciones son bloques de código reutilizables que podemos llamar a voluntad

function sumar() {
  // La función sumar se ejecuta al pulsar el botón +
  if (contador < aforo) { contador++;

    // El contador aumenta solo cuando el contador es menor que 20
   
  } else {
    // Si intentamos sumar cuando el contador está en 20 aparecerá el mensaje el aforo está completo
    pCompleto.style.opacity = 1;
    // Sumar.style.backgroundColor = "lightgray";
  }
  // Si el contador llega a 20 muestra el mensaje de aforo completo
  resultado ();
  comprobarBoton();

}

function restar() {
  if (contador > 0) contador--;
  // Sólo resta si el contador es mayor que 0. Esto es para evitar mostrar números negativos
  pCompleto.style.opacity = 0;
//  En cuanto sale alguien, restamos y el aforo deja de estar completo
Sumar.style.backgroundColor = "pink";
  
  resultado();
}

function resultado() {
  pTotal.innerHTML = contador;
  // Cada vez que ejecutamos esta función el párrafo HTML se actualiza con el valor del contador
}

// función para habilitar o deshabilitar los botones

function comprobarBoton() {
  if (contador > 0) {
    // reactivamos el btn - si el contador sube de 0
    Restar.classList.remove('inactivo');

  }
  if(contador == aforo) {
    // desactivamos el btn + si el contador alcanza el aforo máximo
    Sumar.classList.add('inactivo');
  }
}

