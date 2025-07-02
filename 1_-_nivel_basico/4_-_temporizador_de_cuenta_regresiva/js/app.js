// 4. **Temporizador de Cuenta Regresiva**
//     - El usuario introduce minutos y segundos, y el temporizador empieza la cuenta regresiva.

// Solicitud al usuario para ingresar minutos y segundos
const minutes = parseInt(prompt('Ingrese los minutos:', '0'), 10);
const seconds = parseInt(prompt('Ingrese los segundos:', '0'), 10);

console.log(`Minutos: ${minutes}, Segundos: ${seconds}`);

// Validación de entrada
if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds >= 60) {
  alert('Por favor, ingrese valores válidos para minutos y segundos.');
}

// Función para iniciar el temporizador
function startCountdown(minutes, seconds) {
  let totalSeconds = minutes * 60 + seconds;

  const countdownInterval = setInterval(() => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    console.log(`Minutos: ${mins}, Segundos: ${secs}`);

    // Actualizar el contenido del elemento con el ID 'numCount'
    document.querySelector('#numCount').textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      alert('¡Tiempo agotado!');
    } else {
      totalSeconds--;
    }
  }, 1000);
}

// Iniciar el temporizador con los valores ingresados
startCountdown(minutes, seconds);

// Define the message to be displayed in the header
const message = 'Temporizador de Cuenta Regresiva'; // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message;