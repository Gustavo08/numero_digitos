/* Función para contar los digitos que tiene un numero dado */

function num_of_digits ( num ) {
    return `${ num }`.match(/\d/g).length;
}

let response = num_of_digits(500); //3 digitos

console.log("==== response ====");
console.log(`La cantidad de digitos es: ${ response }`);