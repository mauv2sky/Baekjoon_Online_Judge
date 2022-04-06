const fs = require('fs');
let input = fs.readFileSync('/dev/stdin');
let dp = [0, 1];
function fibonacci(input) {
  if (dp[input] !== undefined) return dp[input];
  return (dp[input] = fibonacci(input - 1) + fibonacci(input - 2));
}
console.log(fibonacci(Number(input)));
