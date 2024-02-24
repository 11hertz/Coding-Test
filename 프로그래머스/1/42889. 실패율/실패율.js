function solution(N, stages) {
    const fArr = Array.from({length: N + 1}, () => 0);
    let count = stages.length;
    
    stages.forEach(x => {
        fArr[x] = fArr[x] ? fArr[x] += 1 : 1;
    });
    
    const rankArr = fArr.map((x, i) => {
        let ret = 0;
        if(x !== 0) ret = x / count;
        count -= x;
        return [i, ret];
    }).slice(1, N + 1);
    
    return rankArr.sort((a, b) => b[1] - a[1]).map(x => x[0]);;
}