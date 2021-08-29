const ItemDAO = require('../database/dao/item');

module.exports = class ItemService {
    constructor() {}
    
    async getItems() {
        const itemDAO = new ItemDAO();
        return itemDAO.getItems();
    }

    async getItemById(id) {
        const itemDAO = new ItemDAO();
        return itemDAO.getItemById(id);
    }

    async createItem(item) {
        const itemDAO = new ItemDAO();
        return itemDAO.createItem(item);
    }

    async updateItem(id, item) {
        const itemDAO = new ItemDAO();
        return itemDAO.updateItem(id, item);
    }

    async deleteItem(id) {
        const itemDAO = new ItemDAO();
        return itemDAO.deleteItem(id);
    }
};