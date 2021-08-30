// 1차 시도 : 8664KB	168ms
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

rl.on('line', line => {
    const input = parseInt(line);
    for (var i = 0; i < input; i++) {
        for (var j = 0; j < input - i - 1; j++) {
            result += ' ';
        }
        for (var k = 0; k <= i; k++) {
            result += '*';
        }
        result += '\n';
    }
}).on('close', () => {
    console.log(result);
    process.exit();
})

// 2차 시도 : 8532KB	124ms
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(' ').map((el) => parseInt(el));

let result = '';
for (var i = 1; i <= input; i++) {
    for (var j = 1; j <= input - i; j++) {
        result += ' ';
    }
    for (var j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);