const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let A = input[0];
let B = input[1];
let C = input[2];

let angleSum = input.reduce((acc, curr) => acc + curr, 0);

if (input.every((x) => x === 60)) console.log('Equilateral');
else if (angleSum === 180 && (A === B || B === C || A === C)) console.log('Isosceles');
else if (angleSum === 180 && A !== B && B !== C && A !== C) console.log('Scalene');
else if (angleSum !== 180) console.log('Error');
