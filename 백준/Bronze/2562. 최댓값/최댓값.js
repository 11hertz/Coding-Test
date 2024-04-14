const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let arr = input;

let max = Number.MIN_SAFE_INTEGER;
let maxIdx = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIdx = i + 1;
  }
}

console.log(max);
console.log(maxIdx);