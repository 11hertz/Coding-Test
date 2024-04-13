const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i];
  console.log(a + b);
}