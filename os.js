var os = require('os');

console.log(os.hostname());
console.log(os.homedir());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.getNetworkInterfaces());

// os 정보의 각 라인마다 제목이 먼저 출력되게 프로그램을 수정하시오.
// ex:
// console.log('os.hostname\n');
// console.log(os.hostname());
// console.log('==============\n');