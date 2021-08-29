require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const router = require('./routes/routes');
app.use(router);

const port = process.env.PORT || 8080;

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