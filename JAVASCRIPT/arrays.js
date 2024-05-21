
// ARRAYS

console.log("Arrays");

// A diferencia de una variable que solo puede guardar un dato a a la vez, los Arrays o "arreglos" son variables multidimensionales, es decir, que podemos almacenar datos en ellas en varias dimensiones, como si se tratase de una estanteria con varias baldas y varios niveles.

// Arrays bidimensionales

let arrayEjemplo = ["uno", "dos", "tres", "cuatro"];

// Para acceder a los datos de un Array tenemos que indicar la posición del elemento al que queremos acceder

let texto = arrayEjemplo[0];
console.log(texto);

// Crear arrays
// Manualmente

const alumnas = ["Arantxa", "Aleja", "Nicole"];
// Al declarar con "const" el array se hará constante y no se podrá modificar, es una buena práctica en programación trabajar con arrays constantes

// A partir de variables
// Por qué usar Arrays?
// Imaginemos que tenmos una lista de cualquier tipo de items (coches, personas, animales...)

let alumna1 = "Cristina";
let alumna2 = "Zaloa";
let alumna3 = "Susana";
let alumna4 = "Natalia";

// Ahora imagina, que tienes que recorrer la lista para encontrar una alumna en especifico pero en vez de unas pocas tuvieras 300

// La solución es un Array

// Un array puede guardar muchos valores usando un solo nombre y puedes acceder a estos valores mediante a una referencia al índice de éstos
const listaAlumnas = [alumna1, alumna2, alumna3, alumna4];

// Imprimir en consola todo el array
console.log(listaAlumnas);

// Imprimir un sólo elemento del array
console.log(listaAlumnas[3]);
console.log(listaAlumnas[1] + " y " + listaAlumnas[2]);
