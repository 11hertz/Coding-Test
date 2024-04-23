const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(Number));

let xArr = [];
let yArr = [];

for (let [X, Y] of input) {
  xArr.push(X);
  yArr.push(Y);
}

const pointCache = arr => {
  let cache = {};
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (cache[x]) cache[x] += 1;
    else cache[x] = 1;
  }
  return cache;
};

let answer = '';

for (let [K, V] of Object.entries(pointCache(xArr))) {
  if (V === 1) answer += K + ' ';
}

for (let [K, V] of Object.entries(pointCache(yArr))) {
  if (V === 1) answer += K;
}

console.log(answer);