const fs = require('fs');

const readModuleFile = async (path) => {
    try {
        var filename = require.resolve(path);
        items = fs.promises.readFile(filename, 'utf8');
        return items;
    } catch (err) {
        console.error(err);
    }
}

let count_items = 0;
let count_item = 0;

const getItems = async (req, res) => {
    const items = await readModuleFile('../data/productos.txt');
    count_items++;
    let display_items = {
        items: JSON.parse(items),
        cantidad: JSON.parse(items).length
    };
    res.send(display_items);
};

const getRandomItem = async (req, res) => {
    count_item++;
    const items = await readModuleFile('../data/productos.txt');
    let random_pick = Math.floor(Math.random() * JSON.parse(items).length);
    let display_items = {
        item: JSON.parse(items)[random_pick]
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