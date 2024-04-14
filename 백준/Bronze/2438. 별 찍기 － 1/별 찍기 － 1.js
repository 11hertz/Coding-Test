const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

for (let i = 1; i <= input; i++) {
  let stars = '';
  for (let j = 0; j < i; j++) {
    stars += '*';
  }
  console.log(stars);
}