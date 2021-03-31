const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

rl.on('line', line => {
    const input = parseInt(line);
    for(var i = 0; i < input; i++){
        for(var j = 0; j < input - i -1; j++){
            result += ' ';
        }
        for(var k = 0; k <= i; k++){
            result += '*';
        }
        result += '\n';
    }
}).on('close', () => {
    console.log(result);
    process.exit();
})