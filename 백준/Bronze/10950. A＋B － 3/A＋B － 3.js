const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let t = input[0];

for (let i = 1; i <= t; i++) {
  let [a, b] = input[i];
  console.log(a + b);
}