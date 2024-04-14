const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let arr = input;
let basket = arr[0][0];
let repeatNum = arr[0][1];

let answer = Array(basket).fill(0);

for (let i = 0; i <= repeatNum; i++) {
  let [from, to, ballNo] = arr[i];
  for (let j = from - 1; j < to; j++) {
    answer[j] = ballNo;
  }
}

console.log(answer.join(' '));