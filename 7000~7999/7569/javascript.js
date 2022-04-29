const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [M, N, H] = input[0].split(' ').map((x) => +x);

let store = [];
let queue = [];
let [prev, cur] = [1, N];
for (let i = 0; i < H; i++) {
  let box = [];
  for (let j = prev; j <= cur; j++) {
    const arr = input[j].split(' ').map((x) => +x);
    box.push(arr);
    let idx = -1;
    while (true) {
      idx = arr.indexOf(1, idx + 1);
      if (idx === -1) break;
      queue.push([(j - 1) % N, idx, i]);
    }
  }
  store.push(box);
  prev = cur + 1;
  cur += N;
}

let day = 0;
function bfs() {
  const dx = [-1, 1, 0, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0, 0];
  const dh = [0, 0, 0, 0, -1, 1];
  let isChange = false;
  let prevIdx = 0;
  while (queue.length) {
    let curIdx = queue.length;
    for (let i = prevIdx; i < curIdx; i++) {
      let [x, y, h] = queue[i];
      for (let i = 0; i < 6; i++) {
        let [tx, ty, th] = [x + dx[i], y + dy[i], h + dh[i]];
        if (tx < 0 || tx >= N || ty < 0 || ty >= M || th < 0 || th >= H) continue;
        if (!store[th][tx][ty]) {
          isChange = true;
          store[th][tx][ty] = day + 1;
          queue.push([tx, ty, th]);
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
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      if (store[i][j].includes(0)) return -1;
    }
  }
  return day;
}

bfs();
console.log(checkAll());
