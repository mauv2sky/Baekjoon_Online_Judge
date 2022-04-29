let [subin, sis] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map((x) => Number(x));

let visited = Array(100001).fill(0);
let cnt = 0;
function bfs() {
    let queue = [[subin, 0]];
    visited[subin] = 1;
    while (queue.length) {
        let [cur, time] = queue.shift();
        if (cur === sis) return time;
        for (next of [cur - 1, cur + 1, cur * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}

console.log(bfs());
