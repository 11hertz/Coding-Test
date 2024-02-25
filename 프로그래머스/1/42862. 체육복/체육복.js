function solution(n, lost, reserve) {
    let lostArr = lost.filter(x => !reserve.includes(x)).sort((a, b) => a - b);
    let reserveArr = reserve.filter(x => !lost.includes(x)).sort((a, b) => a - b);

    for(let i = 0; i < lostArr.length; i++) {
        for(let j = 0; j < reserveArr.length; j++) {
            if(lostArr[i] - reserveArr[j] === 1 || lostArr[i] - reserveArr[j] === -1) {
                lostArr.shift();
                continue;
            }
        }
    }

    return n - lostArr.length;
}