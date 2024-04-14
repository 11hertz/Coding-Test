const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let repeatNum = parseInt(input / 4);
let integerStr = '';
for (let i = 0; i < repeatNum; i++) {
  integerStr += 'long ';
}

console.log(`${integerStr}int`);