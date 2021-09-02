// 1차 시도 : 8116KB	136ms
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(parseInt(line));
}).on('close', () => {
    const mul = (input[0] * input[1] * input[2]).toString().split('').map((el) => parseInt(el));
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < mul.length; i++) {
        result[mul[i]] += 1;
    }
    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
    process.exit();
})

// 2차 시도 : 8604KB	132ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => parseInt(x));
const div = String(input[0] * input[1] * input[2]).split('');

const result = new Array(10).fill(0);
for (let i = 0; i <= 9; i++) {
    result[Number(div[i])] += 1;
}
for (let i = 0; i <= 9; i++) {
    console.log(result[i]);
}

// 3차 시도 : 8584KB	156ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => parseInt(x));
const div = String(input[0] * input[1] * input[2]).split('');

for (let i = 0; i <= 9; i++) {
    let cnt = 0;
    for (let j = 0; j < 9; j++) {
        if (Number(div[j]) === i) cnt += 1;
    }
    console.log(cnt);
}

// 4차 시도 : 8576KB	132ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map((x) => parseInt(x));
const div = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
    console.log(div.split(i + '').length - 1);
}