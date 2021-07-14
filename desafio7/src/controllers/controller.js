const fs = require('fs');

const readModuleFile = async (path) => {
    try {
        const filename = require.resolve(path);
        return await fs.promises.readFile(filename, 'utf8');
    } catch (err) {
        console.error(err);
    }
}

let count_items = 0;
let count_item = 0;

const getItems = async (req, res) => {
    let items = await readModuleFile('../data/productos.txt');
    items = JSON.parse(items);
    count_items++;
    let display_items = {
        items: items,
        cantidad: items.length
    };
    res.send(display_items);
};

const getRandomItem = async (req, res) => {
    count_item++;
    let items = await readModuleFile('../data/productos.txt');
    items = JSON.parse(items);
    let random_pick = Math.floor(Math.random() * items.length);
    let display_items = {
        item: items[random_pick]
    };
    res.send(display_items);
};

const getVisits = (req, res) => {
    let display_visitas = {
        visitas: {
            items: count_items,
            item: count_item
        }
    };
    res.send(display_visitas);
};

module.exports = {
    getItems, 
    getRandomItem, 
    getVisits 
};