const Product = require('../models/Product');
let products = [];
let id_incremental = 1;

// GET productos - devuelve array de productos
const getProducts = (req, res) => {
    if (products.length === 0) {
        let msg = {
            'error': 'No hay productos cargados'
        }    
        return res.send(msg);
    }

    res.send(products);
};

// GET productos/:id - devuelve el producto cuyo id se ha proporcionado
const getProductById = (req, res) => {
    let id = req.params.id;
    const product = products.find(product => product.id == id);
    if (!product) {
        let msg = {
            'error': 'producto no encontrado'
        };
        return res.status(404).send(msg);
    };

    res.send(product);
};

// POST productos - devuelve el producto que se ha incorporado
const postProduct = (req, res) => {
    try {
        let { title, price, thumbnail } = req.body;
        let product = new Product(title, price, thumbnail);
        product.setID(id_incremental);
        id_incremental++;
        products.push(product);
        res.send(product);    
    } catch (error) {
        return res.status(500).send({'error': error.message});
    };
};

// PUT productos/:id
const updateProduct = (req, res) => {
    let id = req.params.id;
    let product = products.find(product => {
        if (product.id == id) {
            product.title = req.body.title;
            product.price = req.body.price;
            product.thumbnail = req.body.thumbnail;
            return product;
        }
    });
    if (!product) {
        let msg = {
            'error': 'producto no encontrado'
        };
        return res.status(404).send(msg);
    };

    res.send(product);
};

// DELETE productos/:id
const deleteProduct = (req, res) => {
    let id = req.params.id;

    let product = products.find(product => product.id == id);
    let index_product = products.indexOf(product);
    let product_deleted = products[index_product];
    products.splice(index_product, 1);

    if (isNaN(index_product)) {
        let msg = {
            'error': 'producto no encontrado'
        };
        return res.status(404).send(msg);
    }
    products.slice(index_product, 1);
    res.send(product_deleted);
};

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct
};