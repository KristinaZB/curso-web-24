// Introducción a Javascript
// console.log('Hola mundo');
// console.log(2+1);

// INICIO
console.log('Contador a cero')
contador = 0;

// entra un cliente
console.log('Entra un cliente');
contador++;

console.log("Número de personas: " + contador);

// Primer caso: Sale un cliente

console.log('Sale un cliente');
contador--;
console.log("Número de personas: " + contador);

// Segundo caso: Llega un cliente
console.log('Llega un cliente');

contador = 20
if (contador == 20) {
    // Si se cumple la condición se ejecuta
    console.log('Aforo completo, espera a que salga alguien')

} else {
    // si no se ejecuta la condición se ejecuta este
    console.log('El cliente entra')
    contador++;
    console.log("Numero de personas: " + contador);

}