const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let TC = Number(input.shift());
let M, N, K;
let farm;
let result = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const bfs = (r, c) => {
  let queue = [[r, c]];

  while (queue.length) {
    let [cR, cC] = queue.shift();
    if (!farm[cR][cC]) continue;

    farm[cR][cC] = 0;
    for (let i = 0; i < 4; i++) {
      let tR = cR + dx[i];
      let tC = cC + dy[i];
      if (tR >= 0 && tR < N && tC >= 0 && tC < M) {
        if (farm[tR][tC]) {
          queue.push([tR, tC]);
        }
      }
    }
  }
};

while (TC--) {
  [M, N, K] = input[0].split(' ').map((x) => parseInt(x));
  farm = Array.from(Array(N), () => Array(M).fill(0));

  for (let i = 1; i <= K; i++) {
    let [Y, X] = input[i].split(' ').map((x) => parseInt(x));
    farm[X][Y] = 1;
  }

  while (true) {
    let r, c;
    for (let i = 0; i < N; i++) {
      let j = farm[i].indexOf(1);
      if (j === -1) continue;
      (r = i), (c = j);
      break;
    }

    if (r === undefined && c === undefined) break;

    result++;
    bfs(r, c);
  }

  input.splice(0, K + 1);
  console.log(result);
  result = 0;
}
