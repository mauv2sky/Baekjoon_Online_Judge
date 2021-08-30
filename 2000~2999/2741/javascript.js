const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

rl.on('line', function (line) {
    const input = parseInt(line);
    for (var i = 1; i < input; i++) {
        result += i + '\n';
    }
    result += input;
}).on('close', function () {
    console.log(result);
    process.exit();
})