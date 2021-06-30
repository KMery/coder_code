const express = require('express');

const { objAleatorio } = require('./randomNum');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(JSON.stringify(new objAleatorio()));
});

app.listen(app.get('port'), (req, res) => {
    console.log(`Server running on port ${app.get('port')}`);
});