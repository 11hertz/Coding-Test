const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

console.log(input === [...input].reverse().join('') ? 1 : 0);