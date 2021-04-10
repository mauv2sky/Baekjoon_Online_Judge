const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const num = Number(input[0]);

    for(var i = 1; i <= num; i++){
        let cnt = 0;
        let sum = 0;
        for(var j = 0; j < input[i].length; j++){
            if(input[i][j] === 'O'){
                cnt++;
            } else {
                cnt = 0;
            }
            sum += cnt;
        }
        console.log(sum);
    }
    process.exit();
})