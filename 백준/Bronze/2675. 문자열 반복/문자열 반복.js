const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.replace('\r', ''));

let T = input[0];

for (let i = 1; i <= T; i++) {
  let [repeatNum, str] = input[i].split(' ');
  let repeatStr = '';
  for (let j = 0; j < str.length; j++) {
    repeatStr += str[j].repeat(repeatNum);
  }
  console.log(repeatStr);
}