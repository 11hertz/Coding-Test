const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let M = input[0];
let N = input[1];

let arr = [];

const isPrime = N => {
  if (N === 1) return false;
  for (let i = 2; i < N; i++) {
    if (N % i === 0) return false;
  }
  return true;
};

for (let i = M; i <= N; i++) {
  if (isPrime(i)) arr.push(i);
}
if (arr.length > 0) {
  console.log(arr.reduce((acc, curr) => acc + curr, 0));
  console.log(Math.min(...arr));
} else console.log(-1);