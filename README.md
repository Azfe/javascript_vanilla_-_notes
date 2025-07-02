# 💻 Ejercicios de Javascript
---

# 🧱 Nivel Básico (Fundamentos esenciales)

## 🔹 **Sintaxis y estructuras básicas**

### 🧪 Ejercicio 1: Tipos de datos y variables

**Enunciado**:

Declara las siguientes variables utilizando `let` o `const`, según corresponda:

- Un número que represente tu edad.
- Un string que contenga tu nombre.
- Un booleano que indique si estás aprendiendo JavaScript.
- Una variable `null`.
- Una variable sin valor asignado (`undefined`).
- Un símbolo y un BigInt.

Muestra todos los valores en consola.

---

## 🔹 **Estructuras de control**

### 🧠 Ejercicio 2: Clasificación de edad

**Enunciado**:

Crea una función `clasificarEdad(edad)` que imprima:

- “Eres menor de edad” si es < 18.
- “Eres adulto” si es >= 18 y < 60.
- “Eres adulto mayor” si es >= 60.

Usa `if`, `else if` y `else`.

### 🔁 Ejercicio 3: Números pares del 1 al 20

**Enunciado**:

Crea un bucle `for` que recorra los números del 1 al 20 e imprima solo los pares.

### 🔂 Ejercicio 4: Suma acumulada con `while`

**Enunciado**:

Crea un bucle `while` que sume los números del 1 al 100 y muestre el resultado total al final.

---

## 🔹 **Funciones básicas**

### 🧮 Ejercicio 5: Función de saludo

**Enunciado**:

Crea una función llamada `saludar` que reciba un nombre y devuelva un saludo personalizado. Usa función flecha y parámetro por defecto (nombre = "amigo").

### 🔄 Ejercicio 6: Función anidada (closure)

**Enunciado**:

Crea una función `crearContador` que devuelva otra función. Cada vez que se llame la función interna, debe aumentar un contador y mostrarlo.

```
const contador = crearContador();
contador(); // 1
contador(); // 2
```

---

## 🔹 **Ámbito (Scope)**

### 📦 Ejercicio 7: Prueba de alcance

**Enunciado**:

Declara una variable global llamada `mensaje`. Crea una función que declare otra variable con el mismo nombre y otro valor. Imprime ambas para entender el alcance de cada una.

Explica la diferencia entre `var`, `let` y `const` con ejemplos.

---

## 🔹 **Arrays y objetos básicos**

### 📋 Ejercicio 8: Lista de compras

**Enunciado**:

Crea un array llamado `compras` con algunos productos. Agrega uno al final con `push`, elimina el primero con `shift`, y muestra el array final.

### 📦 Ejercicio 9: Objeto persona

**Enunciado**:

Crea un objeto `persona` con nombre, edad y ciudad.

- Modifica la ciudad.
- Agrega una propiedad nueva llamada `profesion`.
- Muestra todas las propiedades.

---

## 🔹 **Hoisting y Temporal Dead Zone**

### 🧩 Ejercicio 10: ¿Qué imprime?

**Enunciado**:

Intenta imprimir una variable `x` antes de declararla con `var`, y luego con `let`.

Explica la diferencia entre ambos comportamientos (hoisting vs TDZ).

---

## 🔹 **DOM básico (si usas navegador)**

### 🖱️ Ejercicio 11: Contador en la página

**Enunciado**:

Crea un HTML con un botón y un `<p>` que muestre un número.

Cada vez que se haga clic en el botón, incrementa el número mostrado.

Usa `document.getElementById` y `addEventListener`.

### 📝 Ejercicio 12: Cambiar estilo con evento

**Enunciado**:

Al hacer clic en un botón, cambia el color de fondo de la página aleatoriamente. Usa `querySelector` y `style`.

---
---

# ⚙️ Nivel Intermedio (Lógica, estructura y asincronía)

## 🔹 **Funciones avanzadas**

### 🔁 Ejercicio 1: Fábrica de saludos (closure + funciones anidadas)

**Enunciado**:

Crea una función `crearSaludo(saludo)` que retorne otra función que reciba un nombre y devuelva el saludo completo.

```
const saludarHola = crearSaludo("Hola");
saludarHola("Ana"); // "Hola, Ana"
```

### 🔁 Ejercicio 2: Simulador de delay (callback)

**Enunciado**:

Crea una función `esperar(segundos, callback)` que use `setTimeout` para ejecutar el callback luego de cierto tiempo.

### 🔁 Ejercicio 3: Array transformer (función de orden superior)

**Enunciado**:

Crea una función `transformarArray(arr, transformador)` que reciba un array y una función que modifique sus elementos (usa `map` internamente).

---

## 🔹 **Manipulación de arrays**

### 🔍 Ejercicio 4: Filtrar productos

**Enunciado**:

Dado un array de productos:

```
const productos = [
  { nombre: "Camisa", precio: 30 },
  { nombre: "Pantalón", precio: 50 },
  { nombre: "Zapatos", precio: 100 }
];
```

1. Usa `filter` para quedarte con productos < $50.
2. Usa `map` para obtener un array de nombres.
3. Usa `reduce` para calcular el total de todos los productos.

### 🧪 Ejercicio 5: Chequeos con `every` y `some`

**Enunciado**:

Con un array de edades, verifica si **todos** son mayores de edad (`every`) y si **alguno** tiene más de 65 años (`some`).

### 🔄 Ejercicio 6: Ordenar usuarios

**Enunciado**:

Ordena un array de objetos `usuarios` por edad ascendente. Usa `sort`, sin modificar el array original (inmutabilidad).

---

## 🔹 **Objetos intermedios**

### 🧰 Ejercicio 7: Extraer datos

**Enunciado**:

Dado el objeto:

```
const persona = {
  nombre: "Lucía",
  edad: 25,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  }
};
```

Usa **destructuring** para extraer el nombre, edad y ciudad. Crea una copia del objeto usando `spread` y agrega una propiedad `profesion`.

### 🔁 Ejercicio 8: Iterar propiedades

**Enunciado**:

Itera con `for...in` sobre un objeto `config` para mostrar clave y valor en consola.

---

## 🔹 **Asincronía**

### ⏲️ Ejercicio 9: Temporizador con `setInterval`

**Enunciado**:

Crea un temporizador que imprima el tiempo transcurrido cada segundo. Detén el temporizador a los 5 segundos.

### 🔗 Ejercicio 10: Promesa personalizada

**Enunciado**:

Crea una función que devuelva una **promesa** que se resuelve después de 2 segundos con el mensaje "Hecho". Usa `.then()` para imprimir el resultado.

### 🧵 Ejercicio 11: `async/await` + manejo de errores

**Enunciado**:

Convierte el ejercicio anterior a `async/await`. Añade un `try/catch` para capturar errores simulando un fallo con `Math.random()`.

### ⏱️ Ejercicio 12: Cargar múltiples promesas

**Enunciado**:

Crea tres funciones que devuelvan promesas con diferentes tiempos de espera. Usa `Promise.all` y `Promise.race` para ver cuál termina primero y cómo manejar todas juntas.

---

## 🔹 **Programación orientada a objetos (POO)**

### 🧑‍💼 Ejercicio 13: Objeto con método

**Enunciado**:

Crea un objeto `usuario` con propiedades y un método `saludar()` que imprima un saludo personalizado.

### 🧱 Ejercicio 14: Clases y herencia

**Enunciado**:

Crea una clase `Animal` con `nombre` y `emitirSonido()`. Luego crea una clase `Gato` que extienda de `Animal` y sobrescriba el sonido como “Miau”.

---

## 🔹 **DOM intermedio**

### 🖱️ Ejercicio 15: Delegación de eventos

**Enunciado**:

Crea una lista (`<ul>`) de tareas en HTML. Agrega un único `eventListener` al contenedor que detecte cuándo se hace clic en un `<li>` y lo marque como completado.

### 📄 Ejercicio 16: Agregar y quitar elementos

**Enunciado**:

Crea un formulario para ingresar tareas y un botón para agregarlas a la lista. Incluye un botón en cada tarea para eliminarla.

### 📋 Ejercicio 17: Validar formulario

**Enunciado**:

Valida un formulario que tenga nombre y email. Ambos campos deben completarse y el email debe tener un formato válido. Muestra errores en pantalla.

### 💾 Ejercicio 18: Guardar tareas

**Enunciado**:

Haz que las tareas del ejercicio anterior se guarden en `localStorage`. Al cargar la página, recupéralas y muéstralas automáticamente.

---

## 🔹 **Módulos**

### 📦 Ejercicio 19: Separar funcionalidades

**Enunciado**:

Crea dos archivos:

- `utils.js` con funciones `sumar` y `multiplicar` exportadas.
- `main.js` donde se importen y usen.

Usa `import`/`export` con módulos ES6 (asegúrate de usar `"type": "module"` en `package.json` si estás en Node.js).

---
---

# 🧠 Ejercicios Avanzados y de Arquitectura JavaScript

## 🔹 **Profundización en JavaScript**

### 1. 🧠 *Event Loop y microtasks*

**Enunciado**:

Crea un script que demuestre visualmente el orden de ejecución entre:

- `setTimeout`
- Promesas (`Promise.resolve`)
- Código sincrónico

**Ejemplo esperado**:

```
console.log("Inicio");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("Fin");
```

Explica el resultado y relación con la **Call Stack**, **Microtask Queue** y **Task Queue**.

---

### 2. 🎯 `*this`, `bind`, `call`, `apply`*

**Enunciado**:

Crea un objeto `persona` con un método `saludar`. Luego usa:

- `.bind()` para crear una copia con `this` fijo.
- `.call()` y `.apply()` para invocarlo con distintos contextos.

Extra: Implementa tu propio `.bind()` (polyfill).

---

### 3. 🧊 *Hoisting & Temporal Dead Zone*

**Enunciado**:

Crea ejemplos que evidencien diferencias entre:

- Declaración con `var`, `let` y `const`.
- El uso de variables dentro y fuera de funciones y bloques.

Analiza qué errores lanza cada caso y por qué (e.g. ReferenceError vs undefined).

---

### 4. 🌐 *Prototipos*

**Enunciado**:

Crea un constructor `Animal(nombre)` y usa su prototipo para definir un método `hablar`.

- Crea subclases `Perro` y `Gato` que hereden de `Animal`.
- Implementa la cadena de prototipos manualmente (`Object.create`).

---

## 🔹 **Programación funcional**

### 5. 🧼 *Funciones puras y composición*

**Enunciado**:

Crea funciones puras que:

- Capitalicen un string.
- Eliminen espacios extra.
- Agreguen un sufijo.

Luego combínalas con composición funcional (`compose()` o `pipe()`).

---

### 6. 🔁 *Currying y recursión*

**Enunciado**:

- Escribe una función `sumar(a)(b)(c)` que devuelva la suma total.
- Implementa una versión recursiva de `factorial` y `fibonacci`.

---

## 🔹 **Estructuras avanzadas**

### 7. 🧱 *Set, Map, WeakMap, WeakSet*

**Enunciado**:

- Usa `Set` para eliminar duplicados de un array.
- Usa `Map` para contar ocurrencias de palabras.
- Crea un `WeakMap` para guardar información privada de objetos.

---

### 8. 🧬 *Clonación profunda vs superficial*

**Enunciado**:

Crea un objeto anidado, luego:

- Clónalo superficialmente con `Object.assign()`.
- Clónalo profundamente con `structuredClone()` o función recursiva.
- Modifica propiedades anidadas y observa los efectos.

---

## 🔹 **APIs del navegador**

### 9. 📋 *Clipboard API*

**Enunciado**:

Haz una página con un botón **"Copiar al portapapeles"** que copie un texto. Usa la Clipboard API moderna (`navigator.clipboard.writeText()`).

---

### 10. 🧭 *Geolocation API*

**Enunciado**:

Haz una app que obtenga y muestre la ubicación del usuario. Muestra un mapa con Leaflet o Google Maps si quieres ir más allá.

---

### 11. 🧠 *Web Workers*

**Enunciado**:

Crea un `Web Worker` que calcule números primos sin bloquear la interfaz. Manda mensajes entre el hilo principal y el worker.

---

## 🔹 **Backend con Node.js**

### 12. 🌐 *Servidor HTTP manual*

**Enunciado**:

Usa el módulo `http` para crear un servidor que:

- Devuelva HTML en `/`
- Devuelva un JSON en `/api`
- Devuelva 404 en otras rutas

---

### 13. 🧱 *Express + MongoDB (Full CRUD)*

**Enunciado**:

- Crea una API REST con Express que maneje usuarios (`GET`, `POST`, `PUT`, `DELETE`)
- Conéctala a MongoDB (local o Atlas)
- Usa middlewares para:
    - Loguear las peticiones
    - Manejar errores

---

## 🔹 **Calidad y pruebas**

### 14. 🧪 *Pruebas con Jest*

**Enunciado**:

Escribe funciones matemáticas puras (`sumar`, `restar`, `dividir`) y crea sus tests con **Jest**. Asegúrate de cubrir casos borde (división por 0, argumentos inválidos).

---

### 15. 🌐 *Testing E2E con Cypress*

**Enunciado**:

Crea un formulario simple en React y prueba:

- Que renderiza los campos.
- Que valida inputs incorrectos.
- Que muestra mensaje de éxito al enviar datos válidos.

---

## 🔹 **Buenas prácticas y patrones**

### 16. 📦 *Diseño con Factory y Singleton*

**Enunciado**:

- Implementa un patrón **Factory** que genere distintos tipos de usuarios (`Admin`, `Cliente`, etc).
- Crea un **Singleton** para una clase `Logger` que almacene eventos en memoria.

---

### 17. 🧰 *DRY, KISS, Clean Code*

**Enunciado**:

Refactoriza una función compleja mal estructurada aplicando principios de Clean Code, simplificación (KISS) y eliminación de redundancia (DRY).

---

## 🔹 **Herramientas profesionales**

### 18. 🧹 *Linting y Prettier*

**Enunciado**:

- Configura ESLint con reglas personalizadas.
- Integra Prettier para formato automático.
- Asegúrate de que el código siga estándares (puedes usar `Airbnb` config).

---

### 19. ⚙️ *Bundling con Webpack o Vite*

**Enunciado**:

- Crea una app modular JS.
- Configura **Vite** o **Webpack** para transpilar ES6, procesar CSS y servir archivos.
- Agrega soporte para módulos ES (`import/export`).

---

## 🔹 **Extensión natural**

### 20. 🌐 *Migración a TypeScript*

**Enunciado**:

- Toma una app existente (ej: ToDo o formulario).
- Añade tipos (`string`, `number`, `boolean`, `any`, `unknown`, `Record`, etc).
- Crea interfaces para props de componentes y tipos para funciones.