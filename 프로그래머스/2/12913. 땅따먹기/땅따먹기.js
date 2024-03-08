function solution(land) {
    let answer = 0;

    for(let i = land.length - 1; i > 0; i--) {
        for(let j = 0; j < 4; j++) {
            let max = 0;
            for(let k = 0; k < 4; k++) {
                if(j === k) continue;
                if(land[i - 1][j] + land[i][k] > max) max = land[i - 1][j] + land[i][k];
            }
            land[i - 1][j] = max;
        }
    }

    return Math.max(...land[0]);
}