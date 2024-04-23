const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let N = input[0];
let arr = input[1];

const isPrime = N => {
  if (N === 1) return false;
  for (let i = 2; i < N; i++) {
    if (N % i === 0) return false;
  }
  return true;
};

let count = 0;
for (let i = 0; i < N; i++) {
  if (isPrime(arr[i])) count++;
}

console.log(count);