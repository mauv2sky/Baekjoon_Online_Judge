// 백준 제출
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var A = parseInt(input[0])
var B = parseInt(input[1])
var C = parseInt(input[2])

console.log((A+B)%C)
console.log(((A%C)+(B%C))%C)
console.log((A*B)%C)
console.log(((A%C)*(B%C))%C)

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
//     console.log((input[0] + input[1]) % input[2]);
//     console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
//     console.log((input[0] * input[1]) % input[2]);
//     console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
//     process.exit();
//   });