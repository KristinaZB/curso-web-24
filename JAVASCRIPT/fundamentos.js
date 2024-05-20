// Las variables son cajitas donde guardamos datos
// Primero debemos declarar una variable

let nombre;

// let significa que tenemos la intención de utilizar una variable dentro del contexto del código actual
// Podemos usar las variables de 2 formas. La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual.
// Modificar una variable:

nombre = "Cristina";

// Llamar a una variable
console.log(nombre);

// Las variables pueden contener 3 tipos de datos:

// 1-Cadenas de texto
apellido = "Soba";
// Las cadenas de texto son solo carácteres planos. No se puede operar con ellas, solo unirlas o separarlas

nombre = "Cristina";

console.log(nombre + " " + apellido);
nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// Las cadenas de texto se definen por llevar comillas tanto al inicio como al final

// 2- Integers o números integros

edad = 35;

// Son números operables. Se pueden sumar, restar... y hacer todo tipo de cálculo con ellos
// Un ejemplo que necesitamos guardar un int es que tendremos que calcular datos a partir de éstos:
añoNacimiento = 2024 - edad;
console.log(añoNacimiento);
let mayorEdad;

// Saber si la persona es mayor de edad

if (edad >= 18) {
    console.log(nombre + " es mayor de edad");
    mayorEdad = true;
}

else {
    console.log(nombre + " es menor de edad. Le quedan" + (18 - edad) + "años para ser mayor.");
    mayorEdad = false;
}

// Ejemplo de dato numérico que va en una cadena de texto o string
// No tiene sentido hacer cálculos con ellos

dni = "45656465F"
cp = "48002"
nss = "455465235787/655"

// 3- Booleano o estado binario

espesa = true;

// Solo pueden tener 2 valores, "true" o "false"
// Se generan a partir de comparaciones
if (espesa == true) {
    console.log ("Tomar café inmediatamente!!");
}

// if (espesa) {
// } Esto último es lo mismo que lo de espesa == true

if (mayorEdad) {
    console.log ("Puedes entrar al pub");
}

// Las tres son iguales
if (mayorEdad != true) {}
if (mayorEdad == false) {}
if (!mayorEdad) {}

