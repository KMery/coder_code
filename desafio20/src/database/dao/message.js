const { Message } = require('../db')

module.exports = class MessageDAO {
    async getMessages() {
        return await Message
            .find({}, {email:1, message: 1})
    }

    async getMessageById(id) {
        return await Message
            .findById(id)
    }

    async createMessage({ email, message }) {
        return await Message
            .create({
                email,
                message
            })
    }

    async updateMessage(id, message) {;
        return await Message
            .findByIdAndUpdate(id, message)
    }

    async deleteMessage(id) {;
        return await Message
            .findByIdAndRemove(id)
    }
}