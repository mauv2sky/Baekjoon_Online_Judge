const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
  for(var i = 1; i < 10 ; i++){
      console.log(`${input} * ${i} = ${input*i}`);
  }

  process.exit();
});