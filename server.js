const { setEngine } = require('crypto');
var server = require('http');
// we use ./filename for local module and filename for global module


server.createServer(engine).listen(3000);

function engine(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' }); //writeHead takes status code and content type list
    response.end('Hello World');
}