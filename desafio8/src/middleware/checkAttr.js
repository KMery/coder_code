// El id se asigna desde el backend, el cliente no debería poder asignarlo
const product_data = ['id', 'title', 'price', 'thumbnail'];

// TODO: Validar que todos los campos para guardar el producto esten en el req.body
const checkAttr = (req, res, next) => {
    let wrong_data = [];
    Object.keys(req.body).forEach(attribute => {
        if (product_data.includes(attribute) === false) {
            wrong_data.push(attribute);
        };
    });

    if (wrong_data.length > 0) {
        let msg = {
            'error': `The following data provided is wrong: ${wrong_data}`
        };
        return res.send(msg);
    };

    next();
}

module.exports = checkAttr;