const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', line => {
    input.push(parseInt(line));
}).on('close', () => {
    let max = [input[0], 1];
    for(var i=1; i < 9; i++){
        if(max[0] < input[i]){
            max = [input[i], i+1];
        }
    }
    console.log(max[0] + '\n'+ max[1]);
    process.exit();
})