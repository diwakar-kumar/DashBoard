var express = require('express');
var app = express();

var index = require('./app/expressAppServer/routes/index');
var catalog = require('./app/expressAppServer/routes/catalog');
var port = 3333;
app.listen(port, 'localhost', function(){
    console.log('Server started at port'+ port);
})

app.use('/', index);
app.use('/catalog', catalog); 
console.log('Server started at Port 3333');
module.exports = app;