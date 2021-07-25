const { Router } = require('express');
const router = Router();
const { 
    getProducts, 
    getProductById, 
    postProduct,
    updateProduct,
    deleteProduct,
    // getProductsForm 
} = require('../controllers/productController');
const checkAttr = require('../middleware/checkAttr');

// GET productos - devuelve array de productos
router.get('/api/productos', getProducts);

// GET productos/:id - devuelve el producto cuyo id se ha proporcionado
router.get('/api/productos/:id', getProductById);

// GET productos/guardar - vista formulario para guardar nuevo producto
// router.get('/api/guardar', getProductsForm);
// router.get('/api/productos', getProductsForm);

// POST productos - devuelve el producto que se ha incorporado
router.post('/api/productos', checkAttr, postProduct);

// PUT productos/:id
router.put('/api/productos/:id', updateProduct);

// DELETE productos/:id
router.delete('/api/productos/:id', deleteProduct);

module.exports = router;