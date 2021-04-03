const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let i = 0;
let result = '';

rl.on('line', line => {
    input.push(line.split(' '));
}).on('close', () => {
    while(i < input.length){
        result += Number(input[i][0]) + Number(input[i][1]);
        if(i != input.length -1)
            result += '\n';
        i++;
    }
    console.log(result);
    process.exit();
})