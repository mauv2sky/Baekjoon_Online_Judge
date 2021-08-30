// 1차 시도 : 102920KB	1500ms
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

rl.on('line', function (line) {
    const input = line.split(' ').map((el) => parseInt(el));

    if (input.length === 2) {
        result += input[0] + input[1] + '\n';
    }
}).on('close', function () {
    console.log(result);
    process.exit();
})

// 2차 시도 : 170964KB	1536ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const T = parseInt(input[0]);

let result = "";
for (var i = 1; i <= T; i++) {
    let arr = input[i].split(' ').map((el) => parseInt(el));
    result += arr[0] + arr[1] + "\n";
}
console.log(result);