const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let [[N, X], arr] = input;

let answer = '';

for (let i = 0; i < N; i++) {
  if (arr[i] < +X) answer += arr[i] + ' ';
}

console.log(answer.trim());
