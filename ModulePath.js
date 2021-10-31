const path = require('path');

console.log(filename);

console.log(path.basename(filename)); 
console.log(path.dirname(filename)); 
console.log(path.extname(filename)); 

console.log(path.parse(filename)); 
 
console.log(path.join(dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, './test', 'second.html'));