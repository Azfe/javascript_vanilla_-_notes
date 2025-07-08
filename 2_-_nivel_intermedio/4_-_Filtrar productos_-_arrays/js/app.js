/* 
    Nivel intermedio | **Ejercicio 4: Filtrar productos (arrays)**

    Enunciado: Dado un array de productos:
    const productos = [
        { nombre: "Camisa", precio: 30 },
        { nombre: "Pantalón", precio: 50 },
        { nombre: "Zapatos", precio: 100 }
    ];

    1. Usa filter para quedarte con productos < $50.
    2. Usa map para obtener un array de nombres.
    3. Usa reduce para calcular el precio total de todos los productos.
*/

const productos = [
    { nombre: "Camisa", precio: 30 },
    { nombre: "Pantalón", precio: 50 },
    { nombre: "Zapatos", precio: 100 }
];

productosFiltrados = productos.filter(function(producto) {
    return producto.precio < 50;
});

productosNombres = productos.map(function(producto) {
    return producto.nombre;
});

totalProductos = productos.reduce((sumaTotal, producto) => sumaTotal + producto.precio, 0)

console.log("Filtrados: ");
console.log(productosFiltrados); // [{ nombre: "Camisa", precio: 30 }]

console.log("==============");

console.log(`Nombres: ${productosNombres}`); // ["Camisa", "Pantalón", "Zapatos"]
console.log(`Nombre: ${productosNombres[1]}`); // Pantalón

console.log("==============");


console.log("Total precio productos: ");
console.log(totalProductos); // 3 (total de productos)