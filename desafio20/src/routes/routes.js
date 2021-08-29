const { Router } = require('express');
const router = Router();
const { 
    getItems, 
    getItemById, 
    postItem,
    updateItem,
    deleteItem,
} = require('../controllers/itemsController');
const checkAttr = require('../middleware/checkAttr');

// GET items - devuelve array de items
router.get('/items', getItems);

// GET items/:id - devuelve el item cuyo id se ha proporcionado
router.get('/items/:id', getItemById);

// POST items - devuelve el item que se ha incorporado
router.post('/items', checkAttr, postItem);

// PUT items/:id
router.put('/items/:id', updateItem);

// DELETE items/:id
router.delete('/items/:id', deleteItem);

module.exports = router;