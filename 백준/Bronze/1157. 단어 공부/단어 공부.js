const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let str = input.toUpperCase();
let alphaArr = Array(26).fill(0);

for (let x of str) {
  let idx = x.charCodeAt() - 65;
  alphaArr[idx] += 1;
}

let max = Math.max(...alphaArr);
let maxArr = alphaArr.filter(x => x === max);

if (maxArr.length > 1) console.log('?');
else {
  let idx = alphaArr.indexOf(max);
  console.log(String.fromCharCode(idx + 65));
}