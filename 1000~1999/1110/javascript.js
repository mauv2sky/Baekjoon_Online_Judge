const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

let num = input;
let sum = 0;
let isNotSame = true;
let cycle = 0;

while(isNotSame){
    cycle++;

    sum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);

    if(num === input){
        isNotSame = false;
        console.log(cycle);
    }
}