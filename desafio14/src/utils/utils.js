const fs = require("fs");
const Product = require('../models/Product');

const readArch = async (arch) => {
    try { 
        const productos = await fs.promises.readFile(arch, 'utf-8');
        if (productos.length > 0) {
            return JSON.parse(productos);
        }
    } catch (error) {
        console.error(error);
    }
}

const saveProduct = async (arch, to_save) => {
    try {
        let list_to_save = await readArch(arch);
        if (to_save.title) {
            to_save.id = list_to_save.length + 1;
        };
        list_to_save.push(to_save);
        console.log('list_to_save', list_to_save);
        let save_str = JSON.stringify(list_to_save);
        await fs.promises.writeFile(arch, save_str);
        console.log('List save!');
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    saveProduct,
    readArch
}