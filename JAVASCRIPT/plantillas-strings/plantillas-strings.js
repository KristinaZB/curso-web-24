/*Qué son plantillas de strings

Las plantillas son strings que tienen la posibilidad de contener variables interpoladas

La sintaxis se hace con la tilde inversa (encima de la tecla ñ, una de las que se utiliza para el corchete ])

*/


let texto = 'Hola mundo';
console.log(texto);

/*Admiten comillas dentro del string:*/
texto = 'Me llamo Jonathan, pero me dicen "Johnny"';
console.log(texto);

let string = 'Me llamo Jonathan, pero me dicen "Johnny"';
console.log(string);


/*------Interpolación de variables

Podemos construir un string con variables y expresiones las cuales a la hora de imprimir el string, serán sustituidas por los valores de las variables*/

let nombre = 'Jonathan';
let edad = 35;

let frase;
/*frase = "hola, me llamo " + nombre + "y tengo " + edad + "años";
console.log(frase);*/

//Interpolando:

frase = `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(frase);

/*Ejemplo factura*/

let precio = 10;
let IVA = 0.21;

/*En este caso , la interpolación contiene una expresión, que simplemente una operación matemática (para calcular el precio con IVA) que usa variables*/

let mensajeTotal = `Total: ${(precio * (1 + IVA)).toFixed(2)}€`;

/* Tofixed(2) sirve para que el precio final tenga 2 decimales, por defecto sale 1*/

console.log(mensajeTotal);

/*Cálculo de precio con IVA*/

console.log(precio * IVA);

/*Esto nos da el valor del IVA añadido al precio, pero falta el precio completo

De ahí que sumemos (precio * 1) que representa el precio original

Así obtenemos el precio original más el valor añadido por el IVA*/

console.log((precio * 1) + (precio * IVA));

/*Al final queda pendiente imprimir el html con plantillas de string*/





