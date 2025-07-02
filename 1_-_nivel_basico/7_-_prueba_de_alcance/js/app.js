// Ejercicio 7. **Prueba de alcance**
// Enunciado: Declara una variable global llamada `mensaje`. Crea una función que declare otra variable con el mismo nombre y otro valor. 
// Imprime ambas para entender el alcance de cada una.

// Explica la diferencia entre `var`, `let` y `const` con ejemplos.

// 

var mensaje = "Mensaje global";

function pruebaAlcance() {
    let mensaje = "Mensaje local";
    console.log("Dentro de la función:", mensaje); // Imprime el mensaje local

    if (true) {
        var mensajeVar = "Mensaje con var"; // Variable con alcance de función
        console.log("Dentro del bloque if con var:", mensajeVar); // Imprime el mensaje con var
    }

    if (true) {
        let mensajeLet = "Mensaje con let"; // Variable con alcance de bloque
        console.log("Dentro del bloque if con let:", mensajeLet); // Imprime el mensaje con let
    }

    // console.log(mensajeLet); // Esto causará un error porque mensajeLet no está definida fuera del bloque if !!
}

console.log("Fuera de la función:", mensaje); // Imprime el mensaje global
pruebaAlcance(); // Llamada a la función para ver el efecto del alcance
