const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let sum = 0;
for (let i = 1; i < input; i++) {
  sum += i;
}

console.log(sum);
console.log(2);
