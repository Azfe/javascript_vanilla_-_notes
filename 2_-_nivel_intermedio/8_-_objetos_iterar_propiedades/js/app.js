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

// Iterar propiedades

for (const key in config) {       

    if(key === 'appName'){
        console.log(`${key}: ${config[key]}`);
    }

    if(key === 'version'){
        console.log(`${key}: ${config[key]}`);
    }

    if(key === 'production'){
        console.log(`${key}: ${config[key]}`);
    }

    if (key === 'api') {
        console.log("=============");
        console.log('Key: ', key);

        for (const apiKey in config[key]) {
            if (apiKey === 'baseUrl') {
                console.log(apiKey, ': ', config[key].baseUrl);
            }

            if (apiKey === 'endpoints') {
                console.log('Users endpoint:', config[key][apiKey].users);
                console.log('Products endpoint:', config[key][apiKey].products);
            }
            if (apiKey === 'timeout'){
                console.log(apiKey, ': ', config[key].timeout);
            }
        }
    }

    if (key === 'theme') {
        console.log("=============");
        console.log('Key: ', key);

        for (const themeKey in config[key]) {
            if (themeKey === 'primaryColor') {
                console.log(themeKey, ': ', config[key].primaryColor);
            }
            if (themeKey === 'darkMode'){
                console.log(themeKey, ': ', config[key].darkMode);
            }
            if (themeKey === 'fontSize'){
                console.log(themeKey, ': ', config[key].fontSize);
            }                       
        }
    }

    if (key === 'features') {
        console.log("=============");
        console.log('Key: ', key);

        for (const featKey in config[key]) {
            if (featKey === 'analytics'){
                console.log(featKey, ': ', config[key].analytics);
            }
             if (featKey === 'notifications'){
                console.log(featKey, ': ', config[key].notifications);
            }
             if (featKey === 'experimental'){                
                for(const index in config[key].experimental){                    
                    indexInt = parseInt(index)                    
                    console.log(indexInt + 1,': ', featKey, ': ', config[key].experimental[index]);
                }
            }            
        }
    }

    if (key === 'credentials') {
        console.log("=============");
        console.log('Key: ', key);

        for (const credKey in config[key]){
            if(credKey === 'apiKey'){
                console.log(credKey, ': ', config[key].apiKey);
            }
            if(credKey === 'secret'){
                console.log(credKey, ': ', config[key].secret);
            }
        }
    }    
}