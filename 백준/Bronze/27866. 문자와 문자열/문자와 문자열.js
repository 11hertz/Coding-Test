const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.replace('\r', ''));

let str = input[0];
let idx = +input[1] - 1;

console.log(str[idx]);