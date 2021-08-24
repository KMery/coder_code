const db = require('../db');

module.exports = class ProductDAO {
    async getProducts() {
        return await db('products')
            .from('products')
            .select('id', 'title', 'price', 'thumbnail')
    }

    async getProductById(id) {
        return await db('products')
            .from('products')
            .select('id', 'title', 'price', 'thumbnail')
            .where('id', id)
    }

    async createProduct({ title, price, thumbnail }) {
        const [id] = await db('products')
            .insert({
                title,
                price,
                thumbnail
            })
            // .returning('id');
        return id;
    }

    async updateProduct(id, product) {;
        return await db('products')
            .from('products')
            .update(product)
            .where('id', id)
    }

    async deleteProduct(id) {;
        return await db('products')
            .from('products')
            .where('id', id)
            .del()
    }
}