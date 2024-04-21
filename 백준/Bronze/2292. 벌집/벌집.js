const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let sum = 1;
let level = 1;
while (true) {
  if (input <= sum) break;
  sum += 6 * level;
  level++;
}

console.log(level);