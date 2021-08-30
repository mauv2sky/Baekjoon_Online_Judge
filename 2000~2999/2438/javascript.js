// 1차 시도 : 	8588KB	152ms
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

rl.on('line', line => {
    const input = parseInt(line);
    for (var i = 1; i <= input; i++) {
        for (var j = 1; j <= i; j++) {
            result += '*';
        }
        if (i < input) result += '\n';
    }
}).on('close', () => {
    console.log(result);
    process.exit();
})

// 2차 시도 : 8472KB	152ms
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(' ').map((el) => parseInt(el));

let result = '';
for (var i = 1; i <= input; i++) {
    for (var j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);