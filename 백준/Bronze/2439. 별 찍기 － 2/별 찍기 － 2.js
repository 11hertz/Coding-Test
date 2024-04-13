const input = require('fs').readFileSync('/dev/stdin').toString().trim();

for (let i = 1; i <= input; i++) {
  let stars = '';
  let blanks = '';
  for (let j = input - i; j > 0; j--) {
    blanks += ' ';
  }
  for (let j = 0; j < i; j++) {
    stars += '*';
  }
  console.log(blanks + stars);
}