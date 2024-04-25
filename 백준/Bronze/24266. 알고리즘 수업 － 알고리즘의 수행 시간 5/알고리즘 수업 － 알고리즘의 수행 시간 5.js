const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let N = BigInt(input);

console.log(`${N * N * N}`);
console.log(3);