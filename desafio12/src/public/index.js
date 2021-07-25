let socket = io();

let addButton = document.getElementById('addButton');
let thumbnail = document.getElementById('thumbnail');
let price = document.getElementById('price');
let title = document.getElementById('title');
let output = document.getElementById('output');
let id_incremental = 1;

//Crea filas para la tabla
const setProduct = product => {
    product.id = id_incremental;
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
    id_incremental++;
    output.innerHTML += new_row;
};

addButton.addEventListener('click', function(e){
    e.preventDefault();
    let product = {
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

//Escucha por eventos en los que se agreguen productos
socket.on('addProduct', product => {
    setProduct(product);
});