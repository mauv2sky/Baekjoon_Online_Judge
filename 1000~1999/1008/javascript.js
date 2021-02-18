// 백준 제출
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a/b);


// // 에디터 작성 시
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ').map((el) => parseInt(el));
//   })
//   .on('close', function () {
//     console.log(input[0] / input[1]);
//     process.exit();
//   });