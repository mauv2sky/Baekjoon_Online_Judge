let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
/* 연결된 컴퓨터 쌍을 나타내는 객체 생성 */
let connections = {};
for (let i = 1; i <= Number(input[0]); i++) {
    connections[i] = [];
}
for (let i = 2; i < input.length; i++) {
    let tmp = input[i].trim().split(' ').map(x => parseInt(x));
    connections[tmp[0]].push(tmp[1]);
    connections[tmp[1]].push(tmp[0]);
}
/* dfs로 바이러스 감염 시뮬레이션 */
let visited = [];
function dfs(num) {
    visited.push(num);
    let cons = connections[num];
    for (let i = 0; i < cons.length; i++) {
        if (!visited.includes(cons[i]))
            dfs(cons[i]);
    }
}
dfs(1);
console.log(visited.length - 1)