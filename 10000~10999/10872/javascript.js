let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let dp = [];
function factorial(input) {
  if (input == 0) return 1;
  if (dp[input] !== undefined) {
    return dp[input];
  }
  return (dp[input] = input * factorial(input - 1));
}
console.log(factorial(input));
