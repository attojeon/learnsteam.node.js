//
var fs = require('fs');

// 동기식으로 파일 읽기
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log("동기식 파일 읽기....")
console.log(text);
console.log("=======================");

// 비동기식으로 파일 읽기
fs.readFile('textfile.txt', 'utf8', function( error, data) {
	console.log("비동기식 파일 읽기....")
	console.log(data);
});