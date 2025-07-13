/* 
    Nivel intermedio | **Ejercicio 6: Ordenar usuarios**

    Enunciado: Ordena un array de objetos usuarios por edad ascendente. Usa sort, sin modificar el array original (inmutabilidad).
*/

const usuarios = [
    { nombre: "Abel", edad: 34 },
    { nombre: "Maria", edad: 45 },
    { nombre: "Patricia", edad: 19 },
    { nombre: "Luis", edad: 20 },
    { nombre: "Pedro", edad: 27 },
    { nombre: "Ana", edad: 35 }
]

const ordenadosPorEdad = usuarios.sort((a, b) => a.edad - b.edad);

console.log(ordenadosPorEdad);