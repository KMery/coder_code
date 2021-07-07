const fs = require('fs');

class Archivo {
    constructor(arch) {
        this.arch = arch;
    }

    async leer() {
        try {
            const productos = await fs.promises.readFile(this.arch, 'utf-8');
            // productos.forEach(producto => {
            //     console.log(producto[0]);
            //     console.log(JSON.parse(producto));
            // });
            if (productos.length > 0) {
                console.log(JSON.parse(productos));
                return productos;
            }
        } catch (error) {
            console.error(error);
        }
    }

    async guardar(texto_a_guardar) {
        try {
            let prev_productos = await this.leer();
            let { title, price, thumbnail} = texto_a_guardar
            if (prev_productos !== 'undefined') {
                let nuevo_producto = new Product(title, price, thumbnail);
                let id =  1 || prev_producto.length;
                nuevo_producto.setID(id);
                console.log('nuevo_producto', nuevo_producto);
                // let nuevoArr = [nuevo_producto] || prev_productos
                console.log('prev_productos', prev_productos);
                // let agregar_texto
                await fs.promises.writeFile(this.arch, nuevo_producto);
                // await fs.promises.writeFile(this.arch, JSON.stringify(nuevo_producto));
                console.log('Se ha guardado!');
            }
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

class Product {
    constructor(title, price, thumbnail) {
        // this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    setID(id) {
        this.id = id;
    }
}

let elemento = new Product('prodTitle', 150.5, 'https://link.com')
// elemento.setID(0);
// console.log('elemento', elemento);
let test = new Archivo('./productos.txt');
// test.guardar(nuevo_texto);
test.guardar(elemento);
// test.leer();
// test.borrar();

// {
//     title: (nombre del producto),
//     price: (precio),
//     thumbnail: (url de la foto)
//  }