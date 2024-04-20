const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let T = input[0];

for (let i = 1; i <= T; i++) {
  let change = input[i];

  let answer = '';
  let Q = parseInt(change / 25);
  change %= 25;
  answer += Q + ' ';
  let D = parseInt(change / 10);
  change %= 10;
  answer += D + ' ';
  let N = parseInt(change / 5);
  change %= 5;
  answer += N + ' ';
  let P = parseInt(change / 1);
  change %= 1;
  answer += P + ' ';

  console.log(answer);
}