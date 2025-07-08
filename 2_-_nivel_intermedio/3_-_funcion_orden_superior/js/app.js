/* 
    Nivel intermedio | **Ejercicio 3: Array transformer (función de orden superior)**

    Enunciado: Crea una función transformarArray(arr, transformador) que reciba un array y una función que modifique sus elementos (usa map internamente).
*/

let numeros = [1, 2, 3, 4, 5];

function transformarArray(arr, transformador) {

    return arr.map(transformador);

}

console.log(transformarArray(numeros, function(numero) {
    return numero * 2;
})) // [2, 4, 6, 8, 10]