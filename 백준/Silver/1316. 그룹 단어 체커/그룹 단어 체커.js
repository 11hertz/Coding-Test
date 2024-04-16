const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.replace('\r', ''));

let N = input[0];
let count = N;

for (let i = 1; i <= N; i++) {
  let str = input[i];
  for (let j = 0; j < str.length - 1; j++) {
    if (str[j] != str[j + 1] && str.slice(j + 1).includes(str[j])) {
      count -= 1;
      break;
    }
  }
}

console.log(count);