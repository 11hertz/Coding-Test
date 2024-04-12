const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let repeatNum = parseInt(input / 4);
let integerStr = '';
for (let i = 0; i < repeatNum; i++) {
  integerStr += 'long ';
}

console.log(`${integerStr}int`);