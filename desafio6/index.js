const Product = require('./Producto');
const Archivo = require('./Archivo');

let item = new Product('prodTitle', 150.5, 'https://link.com');
let arch = new Archivo('./productos.txt');

arch.guardar(item);

// arch.leer();

// arch.borrar();