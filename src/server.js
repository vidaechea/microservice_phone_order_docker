const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/order.js');
const app = express();

mongoose.connect('mongodb://docker.for.mac.host.internal:27017/capitoleConsulting')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Settings
app.set('port', 8080);

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//Routes
app.use('/', routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Server run port', app.get('port'));
});