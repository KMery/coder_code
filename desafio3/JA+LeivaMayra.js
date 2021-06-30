const retener = ret => { for( let i = 0; i < ret * 3e6; i++ ); };

const recorrePalabras = (texto, tiempo, totalPalabras, cb) => {
    let palabras = texto.split(' ');
    totalPalabras += palabras.length;
    let ret = tiempo != null ? tiempo : 1000;

    palabras.forEach(palabra => {
        retener(ret);
        console.log(palabra);
    });

    cb(null, totalPalabras);
    return totalPalabras;
}

//Variables configurables
const texto1 = 'Frozen';
const texto2 = 'Hace frío y estoy lejos de casa';
const texto3 = 'Hace tiempo que estoy sentado sobre esta piedra';
const tiempo = 300;


//Llamada a funciones
//Se asume que si no está el parametro tiempo irá 'null'
recorrePalabras(texto1, null, 0, (error, totalPalabras) => {
    recorrePalabras(texto2, tiempo, totalPalabras, (error, totalPalabras) => {
        recorrePalabras(texto3, tiempo, totalPalabras, (error, totalPalabras) => {
            console.log(`\nProceso terminado\nTotal palabras: ${totalPalabras}`);
        })
    })
}) 