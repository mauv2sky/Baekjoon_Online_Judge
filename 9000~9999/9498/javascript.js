// 백준 제출
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var result = parseInt(input[0]);

if(90 <= result && result <= 100){
    console.log("A")
} else if (80 <= result && result < 90 ) {
    console.log("B")
} else if (70 <= result && result < 80 ) {
    console.log("C")
} else if (60 <= result && result < 70 ) {
    console.log("D");
} else {
    console.log("F");
}

// 에디터 작성 시
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on('line', function (line) {
//     result = line.split(' ').map((el) => parseInt(el));
//   })
//   .on('close', function () {
//     if(90 <= result && result <= 100){
//         console.log("A")
//     } else if (80 <= result && result < 90 ) {
//         console.log("B")
//     } else if (70 <= result && result < 80 ) {
//         console.log("C")
//     } else if (60 <= result && result < 70 ) {
//         console.log("D");
//     } else {
//         console.log("F");
//     }
//      process.exit();
//   });