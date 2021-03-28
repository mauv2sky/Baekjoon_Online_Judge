const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

rl.on('line', line => {
    const input = parseInt(line);
    for(var i = 1; i <= input; i++){
        for(var j = 1; j <= i; j++){
            result += '*';
        }
        if(i < input) result += '\n';
    }
}).on('close', () => {
    console.log(result);
    process.exit();
})