// 백준 제출
var fs = require('fs')
const { exit } = require('process')
var input = fs.readFileSync('/dev/stdin').toString().split('\n')
var A = parseInt(input[0])
var B = parseInt(input[1])
var C = input[1].split('')

console.log(A*Number(C[2]))
console.log(A*Number(C[1]))
console.log(A*Number(C[0]))
console.log(A*B)


// // 에디터 작성 시
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let input = []

// rl.on('line', function(line) {
//     input = line.split(' ').map((el) => parseInt(el))
//     input.push(String(input[1]).split(''))
//     console.log(input)
// })
// .on('close', function() {
//     console.log(input[0]*Number(input[2][2]))
//     console.log(input[0]*Number(input[2][1]))
//     console.log(input[0]*Number(input[2][0]))
//     console.log(input[0]*input[1])
//     process.exit()
// })