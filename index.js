var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var bikes = require('./bike');
var hbs = require('express-handlebars');

//handlebars view engine setup
app.engine('hbs',hbs({extname: 'hbs',defaultLayout: 'layout', layoutsDir: __dirname + '/'}));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/bootstrap/node_modules/jquery/dist'));

// load mongoose package
var mongoose = require('mongoose');

// Use native Node promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/bikey_test')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use('/',routes);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});