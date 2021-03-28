const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';
var idx = 1;

rl.on('line', line => {
    const input = line.split(' ').map((el) => parseInt(el));
    
    if(input.length === 2){
        result += `Case #${idx++}: ${input[0]+input[1]}\n`
    }
}).on('close', () => {
    console.log(result);
    process.exit();
})