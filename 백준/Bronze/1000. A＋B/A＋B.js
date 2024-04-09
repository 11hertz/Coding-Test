const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [1, 2];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let [a, b] = input;
	console.log(a + b);
    process.exit();
});