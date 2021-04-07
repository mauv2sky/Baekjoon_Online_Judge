const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(parseInt(line));
}).on('close', () => {
    const mul = (input[0] * input [1] * input[2]).toString().split('').map((el) => parseInt(el));
    let result = [0,0,0,0,0,0,0,0,0,0];
    for(var i = 0; i < mul.length; i++){
        result[mul[i]] += 1;
    }
    for(var i = 0; i < result.length; i++){
        console.log(result[i]);
    }
    process.exit();
})