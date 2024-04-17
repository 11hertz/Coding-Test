const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.replace('\r', ''))
  .map(x => x.split(''));

let answer = '';

let maxRow = 0;

for (let i = 0; i < input.length; i++) {
  let rowLen = input[i].length;
  if (rowLen > maxRow) maxRow = rowLen;
}

for (let i = 0; i < maxRow; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;
    answer += input[j][i];
  }
}

console.log(answer);