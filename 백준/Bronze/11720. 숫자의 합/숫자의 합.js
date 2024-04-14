const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.replace('\r', ''));

let N = input[0];
let numStr = input[1];

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += Number(numStr[i]);
}

console.log(sum);