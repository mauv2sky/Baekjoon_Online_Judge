// 백준 제출
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);

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
//     console.log(input[0] + input[1]);
//     console.log(input[0] - input[1]);
//     console.log(input[0] * input[1]);
//     console.log(Math.floor(input[0] / input[1]));
//     console.log(input[0] % input[1]);
//     process.exit();
//   });