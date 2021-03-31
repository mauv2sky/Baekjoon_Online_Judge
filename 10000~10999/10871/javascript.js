const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = '';

rl.on('line', line => {
    input.push(line.split(' ').map((el) => parseInt(el)));
}).on('close', () => {
    for(var i = 0; i < input[0][0]; i++){
        if(input[1][i] < input[0][1]){
            result += input[1][i] + ' ';
        }
    }

    console.log(result);
    process.exit();
})