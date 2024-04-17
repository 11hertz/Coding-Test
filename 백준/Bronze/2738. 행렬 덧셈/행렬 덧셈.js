const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

const [N, M] = input[0];

let answer = '';

for (let i = 1; i <= N; i++) {
  let row = '';
  for (let j = 0; j < M; j++) {
    row += input[i][j] + input[N + i][j] + ' ';
  }
  answer += row + '\n';
}

console.log(answer);