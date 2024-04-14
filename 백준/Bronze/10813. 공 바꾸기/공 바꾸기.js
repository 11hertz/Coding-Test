const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let arr = input;
let basket = arr[0][0];
let repeatNum = arr[0][1];

let answer = Array.from({ length: basket }, (_, i) => i + 1);

for (let i = 1; i <= repeatNum; i++) {
  let [from, to] = arr[i];
  [answer[from - 1], answer[to - 1]] = [answer[to - 1], answer[from - 1]];
}

console.log(answer.join(' '));