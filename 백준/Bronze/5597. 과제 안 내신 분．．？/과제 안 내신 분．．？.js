const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let arr = input.sort((a, b) => a - b);
let answer = Array(30).fill(0);

for (let i = 0; i < arr.length; i++) {
  let idx = arr[i] - 1;
  answer[idx] = 1;
}

for (let i = 0; i < answer.length; i++) {
  if (answer[i] === 0) console.log(i + 1);
}