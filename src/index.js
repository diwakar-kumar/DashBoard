
var http = require('http');
var port = 3333;
http.createServer(function(request, response){
    var statusCode = 200; 
    response.writeHead(statusCode, {'Content-Type':'text/plain'});
    response.end('Hello World!');
}).listen(port);
console.log('Server started at Port 3333');