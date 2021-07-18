const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use(require('./routes/routes'));

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// indica el directorio donde se almacenaran las plantillas
app.set('views', './views');
// se indica el motor de plantillas a utilizar
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));


app.get('*', (req, res) => {
    let message = {
        'error': 'página no encontrada'
    }
    res.status(404).send(message);
});

//Run server
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});