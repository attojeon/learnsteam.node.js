//
var net = require('./ato_net.js');
var server = require('http');
var fs = require('fs');
var ip = net.getIPAddress();
var port = 31415;

server.createServer(function(request, response) {
    fs.readFile('home.html', function(error, data) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(data);
    });
}).listen(31415, function() {
    console.log('Server Running at http://' + ip + ':' + port);
});