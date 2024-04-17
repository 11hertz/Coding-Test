const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let cPaperNum = input[0];

let canvas = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= cPaperNum; i++) {
  let [R, C] = input[i];

  for (let j = R; j < R + 10; j++) {
    for (let k = C; k < C + 10; k++) {
      canvas[j - 1][k - 1] = 1;
    }
  }
}

let sum = 0;

for (let i = 0; i < canvas.length; i++) {
  for (let j = 0; j < canvas[i].length; j++) {
    if (canvas[i][j] === 1) sum += 1;
  }
}

console.log(sum);