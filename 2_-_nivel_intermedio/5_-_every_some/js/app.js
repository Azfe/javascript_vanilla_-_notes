/* 
    Nivel intermedio | **Ejercicio 5: Chequeos con every y some**

    Enunciado: Con un array de edades, verifica si todos son mayores de edad (every) y si alguno tiene más de 65 años (some).
*/

let edades = [15, 22, 53, 34, 75];

const todosMayores = edades.every(edad => edad >= 65)

const algunosMayores = edades.some(edad => edad >= 65)

console.log(todosMayores); // False. No todos son mayores de 65
console.log(algunosMayores); // True. Algunos son mayores de 65
