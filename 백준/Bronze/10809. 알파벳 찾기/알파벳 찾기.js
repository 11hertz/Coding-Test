const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let str = input;
let alpha = 'abcdefghijklmnopqrstuvwxyz';
let answer = '';

for (let i = 0; i < alpha.length; i++) {
  answer += str.indexOf(alpha[i]) + ' ';
}

console.log(answer.trim());