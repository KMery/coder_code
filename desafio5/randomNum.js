const numAleatorio = (min, max, type) => {
    let num_random = Math.random() * (max - min) + min;
    (type === 'round') ? num_random = Math.round(num_random) : num_random = num_random.toFixed(2);
    return num_random;
};

class objAleatorio {
    constructor() {
        this.id = numAleatorio(1, 10, 'round');
        this.title = `Producto ${numAleatorio(1, 10, 'round')}`;
        this.price = numAleatorio(0.00, 9999.9);
        this.thumbnail = `Foto ${numAleatorio(1, 10, 'round')}`;
    }
}

module.exports = { objAleatorio }