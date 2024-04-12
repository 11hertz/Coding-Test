const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let dan = Number(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}