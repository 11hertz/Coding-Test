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
  let before = answer.slice(0, from - 1);
  let reverseArr = answer.slice(from - 1, to).reverse();
  let after = answer.slice(to);
  answer = [...before, ...reverseArr, ...after];
}

console.log(answer.join(' '));