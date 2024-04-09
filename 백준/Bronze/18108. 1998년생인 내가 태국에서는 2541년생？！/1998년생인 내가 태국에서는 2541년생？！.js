const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [2541];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    console.log(input[0] - 543);
    process.exit();
});