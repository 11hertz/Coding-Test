const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let peaces = [1, 1, 2, 2, 2, 8];

let answer = '';
for (let i = 0; i < peaces.length; i++) {
  answer += peaces[i] - input[i] + ' ';
}

console.log(answer.trim());