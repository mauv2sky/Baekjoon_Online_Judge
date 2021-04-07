const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    const arr = input[1].split(' ').map((el) => parseInt(el));
    let min = arr[0];
    let max = arr[0];
    for(var i = 1; i < input[0]; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(`${min} ${max}`);
    process.exit();
})