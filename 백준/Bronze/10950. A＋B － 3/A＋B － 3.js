const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(line => line.replace('\r', ''));

let inputArr = input.map(x => x.split(' '));

for (let i = 0; i < n; i++) {
  let [a, b] = inputArr[i];
  console.log(+a + +b);
}