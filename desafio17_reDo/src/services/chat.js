const ChatDAO = require('../database/dao/chat');

module.exports = class ChatService {
    constructor() {}
    
    async getChats() {
        const chatDao = new ChatDAO();
        return chatDao.getChats();
    }

    async getChatById(id) {
        const chatDao = new ChatDAO();
        return chatDao.getChatById(id);
    }

    async createChat(Chat) {
        const chatDao = new ChatDAO();
        return chatDao.createChat(Chat);
    }

    async updateChat(id, Chat) {
        const chatDao = new ChatDAO();
        return chatDao.updateChat(id, Chat);
    }

    async deleteChat(id) {
        const chatDao = new ChatDAO();
        return chatDao.deleteChat(id);
    }
};