const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

rl.on('line', function (line) {
    const input = parseInt(line);
    for (var i = input; i > 1; i--) {
        result += i + '\n';
    }
    result += '1';
}).on('close', function () {
    console.log(result);
    process.exit();
})