// Contador de Clics
// Muestra un botón y cuenta cuántas veces se ha hecho clic. Usa el DOM y eventos click.


// Declarar contador
let contador = 0;

// 1. Seleccionamos el botón y el h3
const buttonCount = document.getElementById('btnCount');
buttonCount.addEventListener('click', () => {
  console.log('¡Hiciste clic!');
  contador++;
  console.log(contador);
});

const numCount = document.getElementById('numCount');

document.querySelector('#numCount').innerHTML = contador;

const message = 'Contador de clics'; // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message;