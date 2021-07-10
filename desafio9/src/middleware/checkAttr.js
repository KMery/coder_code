const product_data = ['id', 'title', 'price', 'thumbnail'];
//Verifica los atributos recibidos sean correctos
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