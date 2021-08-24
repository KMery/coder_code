let socket = io();

// const ProductService = require('../services/product');

let addButton = document.getElementById('addButton');
let thumbnail = document.getElementById('thumbnail');
let price = document.getElementById('price');
let title = document.getElementById('title');
let output = document.getElementById('output');

//Crea filas para la tabla
const setProduct = product => {
    let new_row = `
    <tr scope="row">
            <td> ${product.id} </td>
            <td> ${product.title} </td>
            <td> ${product.price} </td>
            <td>
                <img src=${product.thumbnail} alt="image_not_found">
            </td>
        </tr>
    `;
    output.innerHTML += new_row;
};

addButton.addEventListener('click', function() {
    // e.preventDefault();
    console.log('from releaseProduct');

    let product = {
        id: '',
        title: title.value,
        price: price.value,
        thumbnail: thumbnail.value
    };

    //Limpiando inputs
    title.value = '';
    price.value = '';
    thumbnail.value = '';

    socket.emit('addProduct', product);

    // const new_product = new ProductService();
    // await new_product.createProduct(product);

});

//Escucha por eventos en los que se agreguen productos
socket.on('addProduct', product => {
    console.log('on addProduct');
    setProduct(product);
});