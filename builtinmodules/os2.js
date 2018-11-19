const os=require('os');

var totMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total Memmory:${totMem}bytes`);
console.log(`free Memmory :${freeMem}bytes`);
