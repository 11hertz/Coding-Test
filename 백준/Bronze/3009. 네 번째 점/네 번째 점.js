const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let answer = '';

if (input[0][0] === input[1][0] && input[1][0] !== input[2][0])
  answer += input[2][0] + ' ';
else if (input[0][0] === input[2][0] && input[2][0] !== input[1][0])
  answer += input[1][0] + ' ';
else if (input[1][0] === input[2][0] && input[2][0] !== input[0][0])
  answer += input[0][0] + ' ';

if (input[0][1] === input[1][1] && input[1][1] !== input[2][1])
  answer += input[2][1];
else if (input[0][1] === input[2][1] && input[2][1] !== input[1][1])
  answer += input[1][1];
else if (input[1][1] === input[2][1] && input[2][1] !== input[0][1])
  answer += input[0][1];

console.log(answer);