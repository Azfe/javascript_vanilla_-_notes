// Contador de Clics
// Muestra un botón y cuenta cuántas veces se ha hecho clic. Usa el DOM y eventos click.


// Declara contador
let contador = 0;

// Selecciona el botón y el h3
const buttonCount = document.getElementById('btnCount');
const numCount = document.getElementById('numCount');

// Inicializa el valor del contador en el h3
numCount.innerHTML = contador;

// Evento click del botón
buttonCount.addEventListener('click', () => {  
  contador++;
  console.log(contador);

  // Actualiza el valor del contador en el h3
  numCount.innerHTML = contador;
});


const message = 'Contador de clics'; // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message;