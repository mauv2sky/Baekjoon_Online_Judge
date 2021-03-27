const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const roof = input[0];
    for(var i = 1; i <= roof; i++){
        const nums = input[i].split(' ').map((el) => parseInt(el));
        console.log(nums[0]+nums[1]);
    }
    process.exit();
})