/* 
    Ejercicio 8. **Lista de compras**

    Crea un array llamado compras con algunos productos. Agrega uno al final con push, elimina el primero con shift, y muestra el array final.
*/

// Declarar array  
const compras = ["pan", "leche", "huevos", "frutas"];

compras.push("verduras"); // Agregar un producto al final
compras.pop(); // Eliminar el último producto
compras.shift(); // Eliminar el primer producto
compras.unshift("cereales"); // Agregar un producto al inicio
compras.splice(2, 1, "carne"); // Reemplazar el tercer producto con "carne"

// Mostrar el array final
console.log(compras);