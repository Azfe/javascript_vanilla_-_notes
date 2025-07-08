/* 
    Nivel intermedio | **Ejercicio 2: Simulador de delay (callback)**

    Enunciado: Crea una función esperar(segundos, callback) que use setTimeout para ejecutar el callback luego de cierto tiempo.
*/

function esperar(segundos, callback){

    console.log(`Esperando ${segundos} segundos...`);
    // Valida que segundos sea un número positivo
    if(typeof segundos !== 'number' || segundos < 0) {
        console.error('El tiempo debe ser un número positivo');
        return;
    }

    setTimeout(() => {
        console.log(`Esto se ejecuta después de ${segundos} segundos`);
    }, segundos * 1000);
}

esperar(3, setTimeout);