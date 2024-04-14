const input = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map(line => line.replace('\r', ''));

let [a, b] = input;

if (a > 0 && b > 0) console.log(1);
else if (a < 0 && b > 0) console.log(2);
else if (a < 0 && b < 0) console.log(3);
else if (a > 0 && b < 0) console.log(4);