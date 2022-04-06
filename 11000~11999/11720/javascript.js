// 8316KB	132ms
// split()과 map()을 사용하여 공백없는 문자열을 한 자리의 숫자로 변환
// for문으로 배열 각 자릿수 덧셈
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const numArr = input[1].split('').map((el) => parseInt(el));

let sum = 0;
for (let i = 0; i < Number(input[0]); i++) {
    sum += numArr[i];
}
console.log(sum);