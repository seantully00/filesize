'use strict';

//Define port
var port = process.env.PORT || 8080;

//Express
var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

//Handlebars
var hbs = require('express-hbs');
app.set('view engine', 'hbs');

// configure the view engine 
app.engine('hbs', hbs.express4({  
  defaultLayout: __dirname + '/views/layouts/main.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));

var path = require('path');
app.set('views', path.join(__dirname,'/views'));

app.get('/', function(req, res) {  
    
      res.render('index');
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});