// 1차 시도 : 9888KB	324ms
let notSelfNum = [];

function selfNumber(i) {
    let N = i;
    let stringNum = String(i);
    for (let j = 0; j < stringNum.length; j++) {
        N += Number(stringNum[j]);
    }
    return N;
}

for (let i = 1; i <= 10000; i++) {
    let num = selfNumber(i);
    notSelfNum.push(num);
}

for (let i = 1; i <= 10000; i++) {
    if (notSelfNum.indexOf(i) === -1) {
        console.log(i);
    }
}