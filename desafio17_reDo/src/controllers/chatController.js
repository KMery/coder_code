const ChatService = require('../services/chat');

// GET chat
const getChats = async (req, res, next) => {
    console.log('getChats');
    const new_chat = new ChatService()
    const resultChats = await new_chat.getChats();
    res.render('main', { chat: resultChats })
}

// POST chat
const postChat = async (req, res, next) => {
    console.log('postChat');
    const chat = new ChatService()
    await chat.createChat(req.body)
}

module.exports = {
    getChats,
    postChat
}