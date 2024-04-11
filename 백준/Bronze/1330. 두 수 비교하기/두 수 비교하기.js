const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [a, b] = input;

console.log(+a > +b ? '>' : +a < +b ? '<' : '==');
