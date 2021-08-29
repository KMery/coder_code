const { Item } = require('../db')

module.exports = class ItemDAO {
    async getItems() {
        return await Item
            .find({})
    }

    async getItemById(id) {
        return await Item
            .findById(id, {title:1, price: 1, thumbnail: 1, stock:1, _id: 0})
    }

    async createItem({ title, price, thumbnail, stock }) {
        return await Item
            .create({
                title,
                price,
                thumbnail,
                stock
            })
    }

    async updateItem(id, item) {;
        return await Item
            .findByIdAndUpdate(id, item)
    }

    async deleteItem(id) {;
        return await Item
            .findByIdAndRemove(id)
    }
}