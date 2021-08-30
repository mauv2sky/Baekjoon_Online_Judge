// 1차 시도 : 	10024KB     220ms
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = '';

rl.on('line', line => {
    input.push(line.split(' ').map((el) => parseInt(el)));
}).on('close', () => {
    for (var i = 0; i < input[0][0]; i++) {
        if (input[1][i] < input[0][1]) {
            result += input[1][i] + ' ';
        }
    }

    console.log(result);
    process.exit();
})

// 2차 시도 : 	9212KB	132ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const condition = input[0].split(' ').map((el) => parseInt(el));
const nums = input[1].split(' ').map((el) => parseInt(el));

let result = '';
for (let i = 0; i < condition[0]; i++) {
    if (condition[1] > nums[i])
        result += `${nums[i]} `;
}
console.log(result);