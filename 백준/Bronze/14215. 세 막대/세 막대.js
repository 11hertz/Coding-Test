const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let [A, B, C] = input;

let max = Math.max(...input);
let resSum = A + B + C - max;

if (A === B && B === C) console.log(A + B + C);
else if (resSum > max) console.log(resSum + max);
else console.log(resSum - 1 + resSum);