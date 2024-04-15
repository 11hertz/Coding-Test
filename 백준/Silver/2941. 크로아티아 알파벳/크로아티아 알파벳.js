const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let str = input;
let croatiaAlpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let x of croatiaAlpha) {
  str = str.replaceAll(x, ' ');
}

console.log(str.length);