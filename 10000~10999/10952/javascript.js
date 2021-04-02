const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let lines = [];
let isNotZero = true;
let i = 0;
let result = '';

while(isNotZero){
    if(i !== 0){
        result += '\n';
    }

    lines.push(input[i].split(' '));
    let sum = Number(lines[i][0]) + Number(lines[i][1]);
    if(sum === 0){
        isNotZero = false;
    } else {
        result += sum.toString();
        i++;
    }
}

console.log(result);