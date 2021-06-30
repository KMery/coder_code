export class Resta {
    private valor1:number;
    private valor2:number;

    constructor(valor1:number, valor2:number) {
        this.valor1 = valor1;
        this.valor2 = valor2;     
    }

    resultado():number {
        return this.valor1 - this.valor2;
    }
}