
// 웹을 위한 모듈을 가져온다.
var http = require('http');

// 웹서버를 생성한다.
http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end('<h1>Hello World .. !</h1>');
}).listen(31415, function () {
    	console.log('Server running at http://127.0.0.1:31425/');
});