const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

for (let i = 1; i <= 2 * input - 1; i++) {
  let blanks = '';
  let stars = '';
  if (i < input) {
    blanks = ' '.repeat(input - i);
    stars = '*'.repeat(i * 2 - 1);
    console.log(blanks + stars);
  } else if (i >= input) {
    blanks = ' '.repeat(i - input);
    stars = '*'.repeat(input * 2 - (i - input) * 2 - 1);
    console.log(blanks + stars);
  }
}