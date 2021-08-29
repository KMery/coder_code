const MessageDAO = require('../database/dao/message');

module.exports = class MessageService {
    constructor() {}
    
    async getMessages() {
        const messageDAO = new MessageDAO();
        return messageDAO.getMessages();
    }

    async getMessageById(id) {
        const messageDAO = new MessageDAO();
        return messageDAO.getMessageById(id);
    }

    async createMessage(message) {
        const messageDAO = new MessageDAO();
        return messageDAO.createMessage(message);
    }

    async updateMessage(id, message) {
        const messageDAO = new MessageDAO();
        return messageDAO.updateMessage(id, message);
    }

    async deleteMessage(id) {
        const messageDAO = new MessageDAO();
        return messageDAO.deleteMessage(id);
    }
};