/* 
    Ejercicio 10. **¿Qué imprime?**

    Hoisting y Temporal Dead Zone

    Enunciado: Intenta imprimir una variable x antes de declararla con var, y luego con let.

    Explica la diferencia entre ambos comportamientos (hoisting vs TDZ).
*/

// console.log(x); // undefined
// var x = 5;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;


// ⬆️ Hoisting (Elevación)
console.log(nombre); // undefined (no error, pero tampoco valor útil)
var nombre = "Alex";

var edad;
console.log(edad); // undefined
edad = 33;

saludar(); // ✅ Funciona
function saludar() {
  console.log("Hola!");
}

// ⚠️ Temporal Dead Zone (TDZ)
console.log(num); // ❌ ReferenceError
let num = 30;


