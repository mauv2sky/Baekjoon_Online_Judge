const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
  let h = input[0];
  const m = input[1];

  if ( m < 45 ) {
      h = h === 0 ? 23 : (h - 1)
      console.log(h + ' ' + (m + 60 - 45));
  } else if (45 <= m) {
      console.log(h + ' ' + (m - 45));
  }
  
  process.exit();
});