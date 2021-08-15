//Control de atributos mandados
const product_data = ['nombre', 'categoria', 'stock'];

//Validación de atributos que envia el cliente
const checkAttr = (req, res, next) => {
    let required_data = requiredData(req);
    let wrong_data = checkWrongData(req);

    let msg = [];
    if (required_data !== undefined) {
        msg.push(required_data);
    };

    if (wrong_data !== undefined) {
        msg.push(wrong_data);
    };

    if (msg.length > 0) {
        return res.status(400).send(msg);
    };

    next();
}

//Valida si están los campos requeridos
const requiredData = (req) => {
    let required_data = [];

    product_data.forEach(attr => {
        if (req.body[attr] === undefined) {
            required_data.push(attr)
        }
    });

    if (required_data.length > 0) {
        let msg = {
            'error': {
                'required fields': required_data
            }
        };
        return msg;
    };
}

//Valida si existe data erronea
const checkWrongData = (req) => {
    let wrong_data = [];

    Object.keys(req.body).forEach(attribute => {
        if (product_data.includes(attribute) === false) {
            wrong_data.push(attribute);
        };
    });

    if (wrong_data.length > 0) {
        let msg = {
            'error': {
                'wrong data': wrong_data
            }
        };
        return msg;
    };
};

module.exports = checkAttr;