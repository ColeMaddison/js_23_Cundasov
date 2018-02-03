'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
  return res.send('Hello');
});

app.listen(8000, function () {
  return console.log('Server listen on port 8000...');
});
