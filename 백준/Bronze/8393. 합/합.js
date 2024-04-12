const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const sum = num => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

console.log(sum(input));