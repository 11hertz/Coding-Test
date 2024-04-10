const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [a, b, c] = input;

console.log((+a + +b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);