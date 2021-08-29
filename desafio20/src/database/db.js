require('dotenv').config();

const itemSchema = require('./schemas/items')
const messageSchema = require('./schemas/messages')

const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`, {useNewUrlParser: true});


const Item = mongoose.model("Producto", new mongoose.Schema(itemSchema, { timestamps: true }));
const Message = mongoose.model("Mensaje", new mongoose.Schema(messageSchema, { timestamps: true }));

module.exports = {
    Item,
    Message
}