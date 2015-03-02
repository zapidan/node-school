var express = require('express');


var app = express();
var port = process.argv[2];
var pathIndex = process.argv[3];


app.use(require('stylus').middleware(pathIndex || path.join(__dirname, 'public')));
app.use(express.static(pathIndex || path.join(__dirname, 'public')));

app.listen(port);