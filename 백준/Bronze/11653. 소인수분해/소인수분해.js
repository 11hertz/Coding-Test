const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let N = +input;

let k = 2;
while (true) {
  if (N % k === 0) {
    console.log(k);
    N = N / k;
    k = 2;
  } else {
    k++;
  }
  if (N === 1) break;
}