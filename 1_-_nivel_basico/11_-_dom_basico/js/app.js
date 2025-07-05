/* 
    Ejercicio 11. **Contador en la página**

    Enunciado: Crea un HTML con un botón y un <p> que muestre un número.
    Cada vez que se haga clic en el botón, incrementa el número mostrado.
    Usa document.getElementById y addEventListener.
*/

// Declarar contador
let counter = 0;

// Seleccionar el botón y el elemento <div>
const btnCount = document.getElementById('btnCount');
const screenCount = document.getElementById('numCount');

// Asignar el evento click al botón
btnCount.addEventListener('click', () => {
    counter++; // Incrementa el valor del contador
    console.log(counter);

    screenCount.textContent = counter; // Actualiza el contenido del elemento <div> con el nuevo valor
});
