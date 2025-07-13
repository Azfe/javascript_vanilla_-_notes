/* 
    Nivel intermedio | **Ejercicio 7: Extraer datos**

    Enunciado: Dado el objeto:
    const persona = {
        nombre: "Lucía",
        edad: 25,
        direccion: {
            ciudad: "Madrid",
            pais: "España"
        }
    };

    Usa destructuring para extraer el nombre, edad y ciudad. Crea una copia del objeto usando spread y agrega una propiedad profesion.
*/

const persona = {
    nombre: "Lucía",
    edad: 25,
    direccion: {
        ciudad: "Madrid",
        pais: "España"
    }
};

// Extracción tradicional (sin destructuring)
// const nombre = persona.nombre;
// const edad = persona.edad;
// const ciudad = persona.direccion.ciudad
// const pais = persona.direccion.pais

// Extracción con destructuring
const { nombre, edad, direccion: { ciudad, pais }} = persona

console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(pais);


// Copia del objeto + Nueva propiedad
const copyPersona = { ...persona, profesion: "Ingeniera" };

console.log(copyPersona);