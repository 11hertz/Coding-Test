const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

let N = input[0];

let xMax = Number.MIN_SAFE_INTEGER;
let xMin = Number.MAX_SAFE_INTEGER;
let yMax = Number.MIN_SAFE_INTEGER;
let yMin = Number.MAX_SAFE_INTEGER;

for (let i = 1; i < input.length; i++) {
  let [X, Y] = input[i];
  if (X > xMax) xMax = X;
  if (X < xMin) xMin = X;
  if (Y > yMax) yMax = Y;
  if (Y < yMin) yMin = Y;
}

if (N === 1) console.log(0);
else console.log((xMax - xMin) * (yMax - yMin));