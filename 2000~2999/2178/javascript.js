const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [row, colum] = input.shift().split(' ');
const miro = input.map((x) => x.split('').map((v) => +v));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let queue = [[0, 0, 1]];

while (queue.length) {
  const [r, c, dis] = queue.shift();

  for (let i = 0; i < 4; i++) {
    let tR = r + dx[i];
    let tC = c + dy[i];

    if (tR >= 0 && tR < row && tC >= 0 && tC < colum) {
      if (miro[tR][tC] === 1) {
        miro[tR][tC] = dis + 1;
        queue.push([tR, tC, dis + 1]);
      }
    }
  }
}

console.log(miro[row - 1][colum - 1]);
