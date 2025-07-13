/* 
    Nivel intermedio | **Ejercicio 11: async/await + manejo de errores**

    Enunciado: Convierte el ejercicio anterior a async/await. Añade un try/catch para capturar errores simulando un fallo con Math.random().
*/

/*
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
*/

async function ejecutarConRetraso() {
    // Simulamos un 30% de probabilidad de fallo
    const exito = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Hecho");
            } else {
                reject("Error: Algo falló");
            }
        }, 2000)
    });
}

// Función principal que usa async/await con try/catch
async function main() {
    try {
        console.log("Iniciando operación...");
        const resultado = await ejecutarConRetraso();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Proceso completado (éxito o fallo)")
    }
}

// Se ejecuta la función principal
main();