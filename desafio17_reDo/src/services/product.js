const ProductDAO = require('../database/dao/product');

module.exports = class ProductService {
    constructor() {}
    
    async getProducts() {
        const productDao = new ProductDAO();
        return productDao.getProducts();
    }

    async getProductById(id) {
        const productDao = new ProductDAO();
        return productDao.getProductById(id);
    }

    async createProduct(product) {
        const productDao = new ProductDAO();
        return productDao.createProduct(product);
    }

    async updateProduct(id, product) {
        const productDao = new ProductDAO();
        return productDao.updateProduct(id, product);
    }

    async deleteProduct(id) {
        const productDao = new ProductDAO();
        return productDao.deleteProduct(id);
    }
};