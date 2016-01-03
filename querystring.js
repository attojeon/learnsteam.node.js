// 인터넷과 웹 통신에서 사용하는 url, querystring, parse  등을 익힙니다.

var url = require('url');
var stringUrl = 'http://www.learnsteam.co.kr/wp/look?page=1234&p=3bspkqwr&tp=12bafq';
var parseString = url.parse(stringUrl);
console.log('URL String ===================');
console.log(stringUrl);

console.log('Parsed String :===================');
console.log(parseString);

console.log('Url Parsed ===================');
console.log(url.parse(stringUrl));

// querystring 모듈 사용법
var querystring = require('querystring');
console.log('Query String ===================');
console.log(querystring.parse(url.parse(stringUrl).query));