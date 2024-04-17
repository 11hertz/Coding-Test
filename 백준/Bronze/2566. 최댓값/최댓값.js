const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let max = -1;
let maxIdx = '';

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      maxIdx = (i + 1) + ' ' + (j + 1);
    }
  }
}

console.log(max);
console.log(maxIdx);