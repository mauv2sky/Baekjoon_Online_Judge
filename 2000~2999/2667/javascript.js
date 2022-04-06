let input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
let n = Number(input.shift());

let visited = Array.from(Array(n), () => Array(n).fill(0));
let upDown = [-1, 1, 0, 0]; // 상하좌우
let leftRight = [0, 0, -1, 1]; // 상하좌우
let cnt = 0
let result = [];

function rangeCheck(row, col) {
    if (row >= 0 && row < n && col >= 0 && col < n)
        return true;
    return false;
}
function bfs(row, col) {
    let queue = [];
    queue.push([row, col]);
    while (queue.length) {
        let [r, c] = queue.shift();
        if (visited[r][c] === 0) {
            visited[r][c] = 1;
            cnt++;
            for (let i = 0; i < 4; i++) {
                let [tRow, tCol] = [r + upDown[i], c + leftRight[i]];
                let ok = rangeCheck(tRow, tCol);
                if (ok) {
                    if (input[tRow][tCol] === '1') {
                        queue.push([tRow, tCol]);
                    }
                }
            }
        }
    }
}

for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
        if (input[r][c] === '1' && visited[r][c] === 0) {
            bfs(r, c);
            result.push(cnt);
            cnt = 0;
        }
    }
}
result.sort((a, b) => a - b).unshift(result.length);
console.log(result.join("\n"));