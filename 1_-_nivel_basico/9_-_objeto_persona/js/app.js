/* 
    Ejercicio 9. **Objeto persona**

    Enunciado: Crea un objeto persona con nombre, edad y ciudad.
    - Modifica la ciudad.
    - Agrega una propiedad nueva llamada profesion.
    - Muestra todas las propiedades.
*/

// Declarar objeto persona
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Ingeniero",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años. Trabajo de ${this.profesion.toLocaleLowerCase()} y vivo en ${this.ciudad}.`);
    }    
}

persona.saludar(); // Llamar al método saludar
