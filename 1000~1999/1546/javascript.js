const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const scores = input[1].split(' ').map((el) => parseInt(el));
    const M = Math.max(...scores);
    let newScoreSum = 0;
    for(var i = 0; i < Number(input[0]); i++){
        newScoreSum += scores[i] / M * 100;
    }
    console.log(newScoreSum / Number(input[0]));
    process.exit();
})