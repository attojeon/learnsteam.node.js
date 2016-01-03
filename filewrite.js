//
var fs = require('fs');

var data = 'Hello World.';

fs.writeFile('text2.txt', data, 'utf8', function(error){
	console.log('비동기식 파일 쓰기 완료');
});

fs.writeFileSync('text2Sync.txt', data, 'utf8');
console.log('동기식 파일 쓰기 완료');
