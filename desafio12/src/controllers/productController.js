const Product = require('../models/Product');
let products = [];
let id_incremental = 1;

// GET productos - devuelve array de productos
const getProducts = (req, res) => {
    res.render('main', { data: products });
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

// GET productos/guardar
const getProductsForm = (req, res) => {
    return res.render('./partials/form');
}

// POST productos - devuelve el producto que se ha incorporado
const postProduct = (req, res, next) => {
    try {
        let { title, price, thumbnail } = req.body;
        let product = new Product(title, price, thumbnail);
        product.setID(id_incremental);
        id_incremental++;
        products.push(product);

        //Redirigiendo a formulario vacio
        // res.redirect('/api/guardar');
    } catch (error) {
        return res.status(500).send({'error': error.message});
    };
};

// PUT productos/:id
const updateProduct = (req, res) => {
    let id = req.params.id;

    //Se actualiza para que tome solo atributos en req.body
    let product = products.find(product => {
        if (product.id == id) {
            Object.keys(req.body).forEach(attr => {
                product[attr] = req.body[attr];
            });
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

    // El indexOf devuelve -1 si no encuentra el producto
    if (index_product === -1) {
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
    deleteProduct,
    // getProductsForm
};