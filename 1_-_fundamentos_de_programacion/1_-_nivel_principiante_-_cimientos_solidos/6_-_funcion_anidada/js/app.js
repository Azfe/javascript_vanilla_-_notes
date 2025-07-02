// Ejercicio 6. **Función anidada (closure)**
// Descripción: Crea una función crearContador que devuelva otra función. Cada vez que se llame la función interna, debe aumentar un contador y mostrarlo.

// Estructura HTML
const countLabel = document.getElementById('numCount');

// Función anidada (closure)
function crearContador() {

    let count = 0; // Inicializa el contador
        
    return function () {
        count++;
        console.log(count); // Muestra el contador en la consola
        countLabel.innerHTML = `${count}`; // Muestra el contador en el elemento con id numCount
    }    
}

// Invocación a la funcion
const contador = crearContador();