const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const http = require('http').Server(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const router = require('./routes/routes');
app.use(router);

const port = process.env.PORT || 8080;

// configuracion de handlebars en express
app.engine('hbs', handlebars({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

// seteo el motor de plantilla
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
    let message = {
        'error': 'página no encontrada'
    }
    res.status(404).send(message);
});

//Websocket
const io = require('socket.io')(http);

//Run server
http.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


const fs = require("fs");
let productos = [];
const saveProduct = async (arch, producto_a_guardar) => {
    try {
        productos.push(producto_a_guardar);
        let productos_str = JSON.stringify(productos);
        await fs.promises.writeFile(arch, productos_str);
        console.log('Se ha guardado!');
    } catch (error) {
        console.error(error);
    }
}


io.on('connection', socket => {
    console.log('new connection', socket.id);

    socket.on('addProduct', product => {
        console.log('from socket in app.js', product);
        saveProduct(path.join(__dirname, '/public/productos.txt'), product)
        io.sockets.emit('addProduct', product);
    });

    socket.on('addChat', chat => {
        saveProduct(path.join(__dirname, '/public/chat.txt'), chat)
        io.sockets.emit('addChat', chat);
    });
});