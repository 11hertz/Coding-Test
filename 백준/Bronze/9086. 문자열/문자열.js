const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.replace('\r', ''));

let t = input[0];

for (let i = 1; i <= t; i++) {
  console.log(input[i][0] + input[i].at(-1));
}