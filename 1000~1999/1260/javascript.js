const input = require('fs').readFileSync("\input.txt").toString().split('\n');
let [node, _, num] = input[0].split(" ").map(x => parseInt(x));
const graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));

for (let i = 1; i < input.length; i++) {
    let [x, y] = input[i].split(' ').map(x => parseInt(x));
    graph[x][y] = 1;
    graph[y][x] = 1;
}

let vistedDfs = Array.from(Array(node + 1), () => false);
let vistedBfs = Array.from(Array(node + 1), () => false);
let resultDfs = [];
let resultBfs = [];

function dfs(num) {
    vistedDfs[num] = true;
    resultDfs.push(num);

    for (let i = 1; i < graph[num].length; i++) {
        let edgeChk = graph[num][i];
        if (edgeChk == 1 && vistedDfs[i] == false) {
            dfs(i);
        }
    }
}

function bfs(num) {
    let queue = [];
    queue.push(num);
    resultBfs.push(num);

    while (queue.length != 0) {
        let curr = queue.shift();
        vistedBfs[curr] = true;
        for (let i = 0; i < graph.length; i++) {
            if (graph[curr][i] == 1 && vistedBfs[i] == false) {
                vistedBfs[i] = true;
                queue.push(i);
                resultBfs.push(i);
            }
        }
    }
}

dfs(num);
bfs(num);
console.log(`${resultDfs.join(' ')}\n${resultBfs.join(' ')}`);