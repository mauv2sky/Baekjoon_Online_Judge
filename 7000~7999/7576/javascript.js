const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map((x) => +x);

let box = [];
let queue = [];
for (let i = 1; i <= N; i++) {
  const arr = input[i].split(' ').map((x) => +x);
  box.push(arr);
  let idx = -1;
  while (true) {
    idx = arr.indexOf(1, idx + 1);
    if (idx === -1) break;
    queue.push([i - 1, idx]);
  }
}

let day = 0;
function bfs() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let isChange = false;
  let prevIdx = 0;
  while (queue.length) {
    let curIdx = queue.length;
    for (let i = prevIdx; i < curIdx; i++) {
      let [x, y] = queue[i];
      for (let i = 0; i < 4; i++) {
        let [tx, ty] = [x + dx[i], y + dy[i]];
        if (tx < 0 || tx >= N || ty < 0 || ty >= M) continue;
        if (box[tx][ty] === 0) {
          isChange = true;
          box[tx][ty] = day + 1;
          queue.push([tx, ty]);
        }
      }
    }
    if (!isChange) break;
    day++;
    isChange = false;
    prevIdx = curIdx;
  }
}

function checkAll() {
  for (let i = 0; i < N; i++) {
    if (box[i].includes(0)) return -1;
  }
  return day;
}

bfs();
console.log(checkAll());
