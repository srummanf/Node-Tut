var http = require('http');
var server = http.createServer(engine);

server.listen(3000, function(){
    console.log('Server is running on port 3000');
})

function engine(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain', 'Rumman': 'from Heart' }); //writeHead takes status code and content type list'})
    response.end('Hey Yo! Less go!'+request.url)

    console.log(response);
}

// here you can go to local host
// it will show /
// then you write localhost:3000/anything/1/2
// it will show /anything/1/2