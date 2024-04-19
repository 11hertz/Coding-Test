const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

let str = +input[0];
let NS = +input[1];

console.log(str.toString(NS).toUpperCase());