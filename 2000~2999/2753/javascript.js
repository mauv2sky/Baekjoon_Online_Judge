// 백준 제출
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input[0]);

if (A % 4 == 0 && A % 100 != 0 || A % 400 == 0) {
    console.log(1);
} else {
    console.log(0);
}

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
//     if (input % 4 == 0 && input % 100 != 0 || input % 400 == 0) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }
//     process.exit();
//   });