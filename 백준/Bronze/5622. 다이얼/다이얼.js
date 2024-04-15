const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let arr = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10];

let sum = 0;
for (let x of input) {
  let idx = x.charCodeAt() - 65;
  sum += arr[idx];
}

console.log(sum);