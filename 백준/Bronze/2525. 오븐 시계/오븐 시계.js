const fs = require('fs');
const [input, n] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const inputArr = input.trim().split(' ');

let [H, M] = inputArr;

let endTime = +M + +n;
let plusHour = parseInt(endTime / 60);
let currMinute = endTime % 60;

if (+H + plusHour >= 24) console.log(+H + plusHour - 24, currMinute);
else if (+H + plusHour < 24) console.log(+H + plusHour, currMinute);
else if (endTime < 60) console.log(+H, currMinute);