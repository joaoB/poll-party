'use strict'

var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('tweets');
});


app.listen(8080, function() {
  console.log('Web server listening on port 8080!');
});

app.post('/tweets/create', function(req, res) {
  // Code to create tweets goes here.
    res.send('Creating tweet.');
});
