const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use(require('./routes/routes'));

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

//Run server
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});