const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let X = input[0];
let Y = input[1];
let W = input[2];
let H = input[3];

console.log(Math.min(W - X, H - Y, X - 0, Y - 0));