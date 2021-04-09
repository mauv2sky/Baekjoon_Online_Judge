const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(parseInt(line));
}).on('close', () => {
    let diff = [];
    for(var i = 0; i < 10; i++){
        let num = input[i] % 42;
        if(diff.indexOf(num) === -1){
            diff.push(num);
        }
    }
    console.log(diff.length);
    process.exit();
})