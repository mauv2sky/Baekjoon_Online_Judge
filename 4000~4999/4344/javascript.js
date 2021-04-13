const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    let num = Number(input[0]);
    for(var i=1; i <= num; i++){
        let subLine = input[i].split(' ').map((el) => parseInt(el));
        let subNum = subLine[0];
        let sum = 0;
        for(var j=1; j <= subNum; j++){
            sum += subLine[j];
        }
        let avg = sum / subNum;
        let cnt = 0;
        for(var k=1; k <= subNum; k++){
            if(subLine[k] > avg){
                cnt++;
            }
        }
        console.log(((cnt / subNum) * 100).toFixed(3)+'%');
    }
    process.exit();
})