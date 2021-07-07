const fs = require('fs');
const Product = require('./Producto');

class Archivo {
    constructor(arch) {
        this.arch = arch;
    }

    async leer() {
        try {
            const productos = await fs.promises.readFile(this.arch, 'utf-8');
            if (productos.length > 0) {
                console.log(JSON.parse(productos));
                return JSON.parse(productos);
            } else {
                console.log([]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async guardar(texto_a_guardar) {
        try {
            let prev_productos = await this.leer();
            let { title, price, thumbnail} = texto_a_guardar;
            let nuevo_producto = new Product(title, price, thumbnail);
            if (prev_productos !== undefined) {
                nuevo_producto.setID(prev_productos.length + 1);
                prev_productos.push(nuevo_producto);
                await fs.promises.writeFile(this.arch, JSON.stringify(prev_productos));
            } else {
                nuevo_producto.setID(1);
                await fs.promises.writeFile(this.arch, JSON.stringify([nuevo_producto]));
            }
            console.log('Se ha guardado!');
        } catch (error) {
            console.error(error);
        }
    }

    async borrar() {
        try {
            await fs.promises.unlink(this.arch);
            console.log('Se ha borrado el archivo solicitado');
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Archivo;