const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [a, b, c] = input;

if (a === b && b === c) console.log(10000 + +a * 1000);
else if (a === b && b !== c) console.log(1000 + +a * 100);
else if (a !== b && b === c) console.log(1000 + +b * 100);
else if (a !== b && a === c) console.log(1000 + +c * 100);
else if (a !== b && b !== c && a !== c) console.log(Math.max(a, b, c) * 100);