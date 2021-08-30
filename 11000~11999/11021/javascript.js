// 1차 시도 : 	8476KB	152ms
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';
var idx = 1;

rl.on('line', line => {
    const input = line.split(' ').map((el) => parseInt(el));

    if (input.length === 2) {
        result += `Case #${idx++}: ${input[0] + input[1]}\n`
    }
}).on('close', () => {
    console.log(result);
    process.exit();
})

// 2차 시도 : 	8344KB	132ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = parseInt(input[0]);
let result = '';
for (var i = 1; i <= T; i++) {
    let arr = input[i].split(' ').map((el) => parseInt(el));
    result += `Case #${i}: ${arr[0] + arr[1]}\n`
}
console.log(result);