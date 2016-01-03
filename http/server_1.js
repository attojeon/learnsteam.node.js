//
var net = require('./ato_net.js');
var server = require('http').createServer();
var ip = net.getIPAddress();

server.listen(31415, function() {
	console.log('Server Runing at ' + ip + ':31415');
});

setInterval(function() {
	server.close();
}, 10000);



