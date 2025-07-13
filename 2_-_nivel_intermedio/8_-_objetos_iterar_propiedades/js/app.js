/* 
    Nivel intermedio | **Ejercicio 8: Iterar propiedades**

    Enunciado: Itera con for...in sobre un objeto config para mostrar clave y valor en consola.
*/

const config = {
    // Configuración básica
    appName: "Mi Aplicación",
    version: "1.0.0",
    production: false,

    // Configuración de API
    api: {
        baseUrl: "https://api.ejemplo.com/v1",
        endpoints: {
            users: "/users",
            products: "/products"
        },
        timeout: 5000 // milisegundos
    },

    // Configuración de UI
    theme: {
        primaryColor: "#4a6bdf",
        darkMode: true,
        fontSize: 16 // px
    },

    // Configuración de funcionalidades
    features: {
        analytics: true,
        notifications: false,
        experimental: ["nueva_ui", "chat_ai"]
    },

    // Credenciales (normalmente esto iría en .env)
    credentials: {
        apiKey: "abc123-xyz456",
        secret: null // se establecería en tiempo de ejecución
    }
}

// for ( const key in config){
//     console.log(`${key}: ${config[key]}`);
// }

for ( const key in config){
    if(key === 'api'){
        for ( const apiKey in config[key]){
            if(apiKey === 'endpoints'){
                console.log('Users endpoint:', config[key][apiKey].users);
                console.log('Products endpoint:', config[key][apiKey].products);
                
            }
        }
    }

    console.log(`${key}: ${config[key]}`);
}