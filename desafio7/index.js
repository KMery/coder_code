const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

//Routes
app.use(require('./src/routes/routes'));

app.get('*', function(req, res){
    let display_error = {
        message: 'No se ha encontrado la página'
    }
    res.status(404).send(display_error);
});

app.listen(port, (req, res) => {
    console.log(`Server running on ${port}`)
});

