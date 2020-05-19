const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


mongoose.connect('mongodb://localhost/pacientList', { useNewUrlParser: true } );

app.use(bodyParser.json());
app.use('/api', require('./api'));

app.listen(8000, () => {
    console.log('ALL GOOD')
});