/* 
    Nivel intermedio | Ejercicio 1. **Fábrica de saludos (closure + funciones anidadas)**

    Enunciado: Crea una función crearSaludo(saludo) que retorne otra función que reciba un nombre y devuelva el saludo completo.
*/


function crearSaludo(saludo) {
    return function saludarHola(nombre) {
        return `${saludo}, ${nombre}!`;
    };
}

// Ejemplos de uso:
const saludarHola = crearSaludo("Hola");
console.log(saludarHola("Ana")); // "Hola, Ana"

const saludarDia = crearSaludo("Buenos días");
console.log(saludarDia("Gael")); // "Hola, Ana"