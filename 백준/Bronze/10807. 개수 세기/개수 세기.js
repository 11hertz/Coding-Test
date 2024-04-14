const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let [t, arr, v] = input;

let count = 0;

for (let i = 0; i < t; i++) {
  if (arr[i] === +v) count++;
}

console.log(count);