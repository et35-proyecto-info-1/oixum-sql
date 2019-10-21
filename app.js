var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('¡Hola ET 35!');
});

app.listen(3000, function() {
  console.log('Entrá a http://localhost:3000 desde tu navegador para ver qué devuelve esto');
});
