const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.replace('\r', ''));

let repeatNum = input[0];

for (let i = 1; i <= repeatNum; i++) {
  let [a, b] = input[i].split(' ');
  console.log(`Case #${i}: ${+a + +b}`);
}