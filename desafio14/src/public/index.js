let socket = io();

let addButton = document.getElementById('addButton');
let thumbnail = document.getElementById('thumbnail');
let price = document.getElementById('price');
let title = document.getElementById('title');
let output = document.getElementById('output');
let count_products = 0;

//Crea filas para la tabla
const setProduct = product => {
    let new_row = `
    <tr scope="row">
            <td> ${product.id} </td>
            <td> ${product.title} </td>
            <td> $ ${product.price} </td>
            <td>
                <img src=${product.thumbnail} alt="image_not_found">
            </td>
        </tr>
    `;
    output.innerHTML += new_row;
};

addButton.addEventListener('click', function(e){
    // e.preventDefault();
    let product = {
        id: count_products,
        title: title.value,
        price: price.value,
        thumbnail: thumbnail.value
    };

    //Limpiando inputs
    title.value = '';
    price.value = '';
    thumbnail.value = '';

    socket.emit('addProduct', product);
});

socket.on('countProduct', countProduct => {
    count_products = countProduct.length + 1;
})

//Escucha por eventos en los que se agreguen productos
socket.on('addProduct', product => {
    setProduct(product);
});