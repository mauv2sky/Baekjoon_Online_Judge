const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(parseInt(line));
}).on('close', function() {
    let result = 0;
    for(var i = 1; i <= input; i++){
        result += i;
    }
    console.log(result);

    process.exit();
})