const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let sum = input;
let level = 1;
while (true) {
  sum -= level;
  if (sum <= 0) break;
  level++;
}

let std = level + 1;

let a = level + sum;
let b = std - a;

if (level % 2 === 0) console.log(a + '/' + b);
else console.log(b + '/' + a);