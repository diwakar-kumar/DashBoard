"use strict"
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello World!');

}).listen(3333);

console.log('Server started at Port 3333');