function solution(m, n, board) {
    let answer = 0;
    let blockArr = [];
    let b = board.map(x => x.split(''));
    let count = 1;
    
    while(true) {
        for(let i = 0; i < m - 1; i++) {
            for(let j = 0; j < n - 1; j++) {
                if(b[i][j] === b[i][j + 1] 
                   && b[i][j + 1] === b[i + 1][j]
                    && b[i + 1][j] === b[i + 1][j + 1]) {
                    blockArr.push([i, j]);
                    blockArr.push([i, j + 1]);
                    blockArr.push([i + 1, j]);
                    blockArr.push([i + 1, j + 1]);
                }    
            }
        }
        console.log(blockArr);

        for(let [x, y] of blockArr) {
            b[x][y] = count++;
        }

        const regex = new RegExp(/[0-9]/);

        for(let k = 0; k < board.length; k++) {
            for(let i = 1; i < m; i++) {
                for(let j = 0; j < n; j++) {
                    if(regex.test(b[i][j])) {
                        [b[i][j], b[i - 1][j]] = [b[i - 1][j], b[i][j]];
                    } 
                }
            }
        }
        if(blockArr.length === 0) break;
        blockArr = [];
    }
    
    for(let i = 0; i < b.length; i++) {
        for(let j = 0; j < b[i].length; j++) {
            if(!isNaN(b[i][j])) answer += 1;
        }
    }
    
    return answer;
}