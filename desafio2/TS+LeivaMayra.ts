//dynamic import en la operación requerida
const operacion = async (valor1:number, valor2:number, op:string) => {
    try {
        const operar = await import(`./operaciones/${op}`);
        
        // let operando = op.charAt(0).toUpperCase() + op.slice(1);
        let operando = op.replace(/^\w/, firstLetter => firstLetter.toUpperCase());
                
        let calculo = new operar[operando](valor1, valor2);
        return calculo.resultado();
        
    } catch (error) {
        return 'operación incorrecta';
    }
}

/*
    Se llama solo a suma y resta que eran las indicadas pero 
    igualmente tira un msg si no existe la operación requerida
*/
const operaciones = async () => {
    console.log('\nLa suma de 3 + 2 es', await operacion(3, 2, 'suma'));   
    console.log('\nLa resta de 9 - 5 es', await operacion(9, 5, 'resta'));
    console.log('\nLa libreria_inexistente de 3 ? 2 es', await operacion(3, 2, 'libreria_inexistente'));
    console.log('\nLa resta de 0 - 21 es', await operacion(0, 21, 'resta'));
    console.log('\nLa suma de 11 + 5 es', await operacion(11, 5, 'suma'));   
}

//Llamada a los casos de prueba
operaciones();