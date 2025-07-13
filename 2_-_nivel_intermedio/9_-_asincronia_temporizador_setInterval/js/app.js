/* 
    Nivel intermedio | **Ejercicio 9: Temporizador con setInterval**

    Enunciado: Crea un temporizador que imprima el tiempo transcurrido cada segundo. Detén el temporizador a los 5 segundos.
*/

let contador = 0;

const temporizador = setInterval(() => {

    contador++;

    if (contador === 5) {
        clearInterval(temporizador);
    }

    console.log(`Contador: ${contador}`)

}, 1000)