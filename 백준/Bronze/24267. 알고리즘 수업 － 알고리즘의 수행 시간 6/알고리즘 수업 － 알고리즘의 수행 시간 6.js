const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let I = BigInt(input);
let J = BigInt(input - 1);
let K = BigInt(input - 2);
let N = BigInt(6);

console.log(((I * J * K) / N).toString());
console.log(3);