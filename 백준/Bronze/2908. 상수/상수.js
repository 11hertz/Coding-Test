const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

let arr = input.map(x => +[...x].reverse().join(''));
console.log(Math.max(...arr));