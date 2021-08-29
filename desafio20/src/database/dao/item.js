const db = require('../db');

module.exports = class ItemDAO {
    async getItems() {
        return await db('items')
            .from('items')
            .select('id', 'nombre', 'categoria', 'stock')
    }

    async getItemById(id) {
        return await db('items')
            .from('items')
            .select('nombre', 'categoria', 'stock')
            .where('id', id)
    }

    async createItem({ nombre, categoria, stock }) {
        const [id] = await db('items')
            .insert({
                nombre,
                categoria,
                stock
            })
        return id;
    }

    async updateItem(id, item) {;
        return await db('items')
            .from('items')
            .update(item)
            .where('id', id)
    }

    async deleteItem(id) {;
        return await db('items')
            .from('items')
            .where('id', id)
            .del()
    }
}