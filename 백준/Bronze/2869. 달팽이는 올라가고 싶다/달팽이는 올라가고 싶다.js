const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let A = input[0];
let B = input[1];
let V = input[2];

console.log(Math.ceil((V - B) / (A - B)));