const ProductService = require('../services/product');
const ChatService = require('../services/chat');

const {
    getChats,
    postChat,
} = require('./chatController');

// GET productos - devuelve array de productos
const getProducts = async (req, res) => {
    try {
        console.log('getProducts');
        // let read_products = await readArch(path.join(__dirname, '../public/productos.txt'));
        // let read_messages = await readArch(path.join(__dirname, '../public/chat.txt'));
        // res.render('main', { data: read_products, chat: read_messages });
        const new_chat = new ChatService()
        const resultChats = await new_chat.getChats();
        // console.log('resultChats', resultChats);
        const product = new ProductService();
        const resultProducts = await product.getProducts();
        res.render('main', { data: resultProducts, chat: resultChats })//, chat: read_messages });
        // res.render('main', { chat: resultChats })
        // res.send({
        //     products: resultProducts 
        // });
    } catch (error) {
        console.error(error);
    }
};

// GET productos/:id
const getProductById = async (req, res) => {
    try {
        const product = new ProductService();
        const resultProducts = await product.getProductById(req.params.id);
        res.send({
            product: resultProducts 
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

// POST productos
const postProduct = async (req, res, next) => {
    try {
        console.log('postProduct');
        const product = new ProductService();
        // const resultProducts = await product.createProduct(req.body);
        await product.createProduct(req.body);
        // const resultProducts = await product.getProducts();
        // res.render('main', { data: resultProducts })
        res.redirect('/api/productos');
        // res.send({
        //     newProductId: resultProduct
        // });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    };
};

// PUT productos/:id
const updateProduct = async (req, res) => {
    try {
        const product = new ProductService();
        const resultProduct = await product.updateProduct(req.params.id, req.body);
        res.send({
            id: resultProduct
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

// DELETE productos/:id
const deleteProduct = async (req, res) => {
    try {
        const product = new ProductService();
        const resultProduct = await product.deleteProduct(req.params.id);

        if (resultProduct === 0) {
            return res.status(400).send({error: 'Id a borrar no existe'})
        }

        res.send({
            deleteId: resultProduct
        });
    } catch (error) {
        return res.status(500).send({'error': error.message});
    }
};

module.exports = {
    getProducts,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
};