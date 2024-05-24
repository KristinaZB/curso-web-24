// Operaciones y asignaciones

// Declaración de variables
let x;
let y;
let z;

// Varias declaraciones en un let
let a, b, c;

// Asignación de valor (=)
a = 1;
b = 2;
c = 3;

// Asignaciones en una sola línea

// b, c = 4; 

x = a;
// a partir de ahora x = a = 1
console.log("x = " + x);

y = a + b;
// Se puede guardar el resultado de operar dos variables en otra variable
console.log("y = " + y);

z = (3 + 5) * b;
// Se puede operar juntando valores numéricos con variables numéricas
console.log("z = " + z);

// PEMDAS 
// Paréntesis - Exponentes -> 
// Multiplicación - División -> 
// Suma - Resta 

// Incrementos y decrementos

x = 32;
x++;
// x aumenta en 1, ahora x = 33
console.log("x = " + x);

y = 6;
y--;
console.log("y = " + y);

z = 3;
z *=2;
// Con esto z se multiplica por 2
console.log("z = " + z);

x = 10;
x /= 2;
// Con esto se divide entre 2
console.log("x = " + x);

// RESTO (%)

x = 10;
y = 3;
z = x % y;
// Esto nos da el resto de la división no el resultado
console.log("x % y = " + z);