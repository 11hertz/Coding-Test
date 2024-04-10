const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map(line => line.replace('\r', ''));

let [a, b] = input;
console.log(a * b.at(-1));
console.log(a * b.at(-2));
console.log(a * b.at(-3));
console.log(a * b);