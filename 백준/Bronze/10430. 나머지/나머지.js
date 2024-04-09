const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [5, 8, 4];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let [a, b, c] = input;
    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log((a * b) % c);
    console.log(((a % c) * (b % c)) % c);
    process.exit();
});