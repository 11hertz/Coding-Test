const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let N = input[0];
let M = Math.max(...input[1]);
let scoreArr = input[1].map(x => (x / M) * 100);
let totalScore = 0;
for (let x of scoreArr) totalScore += x;

console.log(totalScore / N);