const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let [H, M] = input;

let setMinute = M - 45;

if (setMinute < 0 && H !== '0') console.log(H - 1, setMinute + 60);
else if (setMinute < 0 && H === '0') console.log(23, setMinute + 60);
else if (setMinute >= 0) console.log(H, setMinute);
