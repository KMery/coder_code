const recorrePalabras = (texto, tiempo = 1000, totalPalabras, cb) => {
    let palabras = texto.split(' ');
    totalPalabras += palabras.length;

    let counter = 0;
    const interval = setInterval(() => {
        console.log(palabras[counter++]);
        if (counter === palabras.length) {
            clearInterval(interval);
            cb(null, totalPalabras);
        }
    }, tiempo);
    
    return totalPalabras;
}

//Variables configurables
const texto1 = 'uno';
const texto2 = 'dos tres';
const texto3 = 'cuatro cinco seis';
const tiempo = 3000;


//Llamada a funciones
//Se asume que si no está el parametro tiempo irá 'null'
recorrePalabras(texto1, null, 0, (error, totalPalabras) => {
    recorrePalabras(texto2, tiempo, totalPalabras, (error, totalPalabras) => {
        recorrePalabras(texto3, tiempo, totalPalabras, (error, totalPalabras) => {
            console.log(`\nProceso terminado\nTotal palabras: ${totalPalabras}`);
        });
    });
}); 