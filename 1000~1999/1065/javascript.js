// 1차시도 : 8604KB 	164ms
const input = Number(require('fs').readFileSync('/dev/stdin').toString());

function hansu(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (i < 100) {
            cnt++;
        } else {
            let strN = String(i);
            let A = Number(strN[0]) - Number(strN[1]);
            let B = Number(strN[1]) - Number(strN[2]);
            if (A === B) cnt++;
        }
    }
    return cnt;
}

console.log(hansu(input));