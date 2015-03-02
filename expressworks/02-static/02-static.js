var express = require('express');


var port = process.argv[2];
var pathIndex = process.argv[3];

var app = express();

app.use(express.static(pathIndex || path.join(__dirname, 'public')));
app.listen(port);