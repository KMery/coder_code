const db = require('../db');

module.exports = class ChatDAO {
    async getChats() {
        return await db('chat')
            .from('chat')
            .select('email', 'message', 'created_at')
    }

    async getChatById(id) {
        return await db('chat')
            .from('chat')
            .select('id', 'email', 'message')
            .where('id', id)
    }

    async createChat({ email, message }) {
        const [id] = await db('chat')
            .insert({
                email,
                message
            })
        return id;
    }

    async updateChat(id, chat) {;
        return await db('chat')
            .from('chat')
            .update(chat)
            .where('id', id)
    }

    async deleteChat(id) {;
        return await db('chat')
            .from('chat')
            .where('id', id)
            .del()
    }
}