'use strict'

var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('tweets');
});


app.listen(8080, function() {
  console.log('Web server listening on port 8080!');
});
