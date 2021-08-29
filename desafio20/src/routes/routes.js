const { Router } = require('express');
const router = Router();
const { 
    getItems, 
    getItemById, 
    postItem,
    updateItem,
    deleteItem,
} = require('../controllers/itemsController');
const {
    getMessages,
    getMessageById,
    postMessage,
    updateMessage,
    deleteMessage,
} = require('../controllers/messagesController')
const checkAttr = require('../middleware/checkAttr');
//ITEMS routes
// GET items - devuelve array de items
router.get('/items', getItems);

// GET items/:id - devuelve el item cuyo id se ha proporcionado
router.get('/items/:id', getItemById);

// POST items - devuelve el item que se ha incorporado
router.post('/items', checkAttr, postItem);

// PUT items/:id
router.put('/items/:id', checkAttr, updateItem);

// DELETE items/:id
router.delete('/items/:id', deleteItem);


//MESSAGES routes
//GET all messages
router.get('/messages', getMessages);

//GET message by Id
router.get('/messages/:id', getMessageById);

//POST new message
router.post('/messages', checkAttr, postMessage);

//UPDATE message by Id
router.put('/messages/:id', checkAttr, updateMessage);

//DELETE message by Id
router.delete('/messages/:id', deleteMessage);

module.exports = router;