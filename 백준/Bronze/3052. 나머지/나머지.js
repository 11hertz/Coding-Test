const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let set = new Set();

for (let i = 0; i < input.length; i++) {
  set.add(input[i] % 42);
}

console.log(set.size);