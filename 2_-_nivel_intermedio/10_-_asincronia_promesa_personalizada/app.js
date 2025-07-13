/* 
    Nivel intermedio | **Ejercicio 10: Promesa personalizada**

    Enunciado: Crea una función que devuelva una promesa que se resuelve después de 2 segundos con el mensaje "Hecho". Usa .then() para imprimir el resultado.
*/

function ejecutarConRetraso(exito = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Hecho");
            } else {
                reject("Error: Algo falló");
            }
        }, 2000); // 2000 milisegundos = 2 segundos
    });
}

// Uso completo con then y catch
ejecutarConRetraso()
    .then((mensaje) => console.log(mensaje)) // Imprimirá "Hecho" después de 2 segundos
    .catch((error) => console.log(error)); 