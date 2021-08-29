const ItemService = require('../services/item');

// GET items
const getItems = async (req, res) => {
    const items = new ItemService();
    const resultItems = await items.getItems();
    res.send({
        items: resultItems 
    });
};

// GET items/:id
const getItemById = async (req, res) => {
    try {
        const item = new ItemService();
        const resultItem = await item.getItemById(req.params.id);
        if (!resultItem) {
            return res.status(400).send({error: `No existe id ${req.params.id}`})
        }

        res.send({
            item: resultItem 
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

// POST item
const postItem = async (req, res, next) => {
    try {
        const item = new ItemService();
        const resultItem = await item.createItem(req.body);
        res.send({
            newItem: resultItem
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    };
};

// PUT items/:id
const updateItem = async (req, res) => {
    try {
        const item = new ItemService();
        const resultItem = await item.updateItem(req.params.id, req.body);

        if (!resultItem) {
            return res.status(400).send({error: `No es posible actualizar id ${req.params.id}`})
        }

        res.send({
            updatedId: resultItem._id
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

// DELETE items/:id
const deleteItem = async (req, res) => {
    try {
        const item = new ItemService();
        const resultItem = await item.deleteItem(req.params.id);

        if (resultItem === 0) {
            return res.status(400).send({error: 'Id a borrar no existe'})
        }

        res.send({
            deleteItem: resultItem
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

module.exports = {
    getItems,
    getItemById,
    postItem,
    updateItem,
    deleteItem,
};