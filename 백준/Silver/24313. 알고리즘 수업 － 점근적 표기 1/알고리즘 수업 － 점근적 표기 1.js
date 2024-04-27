const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let [A1, A0] = input[0];
let C = input[1];
let N0 = input[2];

let answer = 1;
for (let N = N0; N <= 100; N++) {
  if (A1 * N + A0 <= C * N) continue;
  else {
    answer = 0;
    break;
  }
}

console.log(answer);