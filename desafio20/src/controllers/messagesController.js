const MessageService = require('../services/message');

// GET messages
const getMessages = async (req, res) => {
    const messages = new MessageService();
    const resultMessages = await messages.getMessages();
    res.send({
        messages: resultMessages 
    });
};

// GET messages/:id
const getMessageById = async (req, res) => {
    try {
        const message = new MessageService();
        const resultMessage = await message.getMessageById(req.params.id);
        if (!resultMessage) {
            return res.status(400).send({error: `No existe id ${req.params.id}`})
        }

        res.send({
            message: resultMessage
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

// POST message
const postMessage = async (req, res, next) => {
    try {
        const message = new MessageService();
        const resultMessage = await message.createMessage(req.body);
        res.send({
            newMessage: resultMessage
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    };
};

// PUT messages/:id
const updateMessage = async (req, res) => {
    try {
        const message = new MessageService();
        const resultMessage = await message.updateMessage(req.params.id, req.body);

        if (!resultMessage) {
            return res.status(400).send({error: `No es posible actualizar id ${req.params.id}`})
        }

        res.send({
            updatedId: resultMessage._id
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

// DELETE messages/:id
const deleteMessage = async (req, res) => {
    try {
        const message = new MessageService();
        const resultMessage = await message.deleteMessage(req.params.id);

        if (resultMessage === 0) {
            return res.status(400).send({error: 'Id a borrar no existe'})
        }

        res.send({
            deletetMessage: resultMessage
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

module.exports = {
    getMessages,
    getMessageById,
    postMessage,
    updateMessage,
    deleteMessage,
};