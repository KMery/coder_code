const fs = require('fs');

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

    async guardar(producto_a_guardar) {
        try {
            let prev_productos = await this.leer();
            if (prev_productos !== undefined) {
                producto_a_guardar.setID(prev_productos.length + 1);
                prev_productos.push(producto_a_guardar);
                let prev_productos_str = JSON.stringify(prev_productos);
                await fs.promises.writeFile(this.arch, prev_productos_str);
            } else {
                producto_a_guardar.setID(1);
                await fs.promises.writeFile(this.arch, prev_productos_str);
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