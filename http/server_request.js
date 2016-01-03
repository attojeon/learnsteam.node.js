//
var net = require('./ato_net.js');
var httpd = require('http');
var url = require('url');
var ip = net.getIPAddress();
var port = 31415;

var server = httpd.createServer(function(request, response) {
	var query = url.parse(request.url, true).query;

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end('<h1>' + JSON.stringify(query) + '</h1>');
});

server.listen(31415, function() {
    console.log('Server Running at http://' + ip + ':' + port);
});