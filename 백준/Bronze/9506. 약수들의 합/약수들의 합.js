const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const divisor = N => {
  let arr = [];
  let sum = 0;
  for (let i = 1; i < N; i++) {
    if (N % i === 0) {
      arr.push(i);
      sum += i;
    }
  }
  return [arr, sum];
};

for (let i = 0; i < input.length; i++) {
  let N = input[i];
  if (N === -1) break;

  let [div, divSum] = divisor(N);
  let count = 0;
  let str = '';
  for (let k = 0; k < div.length; k++) {
    if (count < div.length - 1) str += div[k] + ' + ';
    else str += div[k];
    count++;
  }
  if (divSum === N) console.log(`${divSum} = ${str}`);
  else console.log(`${N} is NOT perfect.`);
}