const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let N = input[0];
let K = input[1];

let arr = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) arr.push(i);
}

console.log(arr.length < K ? 0 : arr[K - 1]);