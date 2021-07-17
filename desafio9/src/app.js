const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use(require('./routes/routes'));

const port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public'));

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