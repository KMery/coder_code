class Product {
    constructor(title, price, thumbnail) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    setID(id) {
        this.id = id;
    }
}

module.exports = Product;