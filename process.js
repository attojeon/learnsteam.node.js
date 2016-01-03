process.argv.forEach(function (item, index) {
	console.log(index + ' ' + typeof(item) + ' : ', item);

	if( item == '--endTime') {
		var endTime = Number(process.argv[index + 1]);

		setTimeout(function() {
			process.exit();
		}, endTime);
	}

	// argument item에 'node' 문자가 포함되면 그것의 인덱스와 문자열, 타입 등을 출력하는 로직을 추가하시오.
	// HINT 		var n = 'string'.search('node')

});