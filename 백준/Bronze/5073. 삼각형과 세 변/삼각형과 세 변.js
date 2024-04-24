const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

for (let i = 0; i < input.length; i++) {
  let [A, B, C] = input[i];
  if (A === 0 && B === 0 && C === 0) break;
  let max = Math.max(A, B, C);
  let resSum = A + B + C - max;

  if (resSum <= max) console.log('Invalid');
  else if (A === B && B === C && A === C) console.log('Equilateral');
  else if ((A === B && B !== C) || (A !== B && B === C) || (A === C && A !== B)) console.log('Isosceles');
  else if (A !== B && B !== C && A !== C) console.log('Scalene');
}