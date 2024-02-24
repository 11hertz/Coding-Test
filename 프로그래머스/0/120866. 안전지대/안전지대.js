function solution(board) {
    let answer = 0;
    const len = board.length;
    const mine = [];
    const dz = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(board[i][j] === 1) mine.push([i, j]);
        }
    }

    for(let i = 0; i < mine.length; i++) {
        for(let k = 0; k < dz.length; k++) {
            let x = mine[i][0] + dz[k][0];
            let y = mine[i][1] + dz[k][1];
            if(x >= 0 && x < len && y >= 0 && y < len) board[x][y] = 1;
        }
    }
   
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(board[i][j] === 0) answer += 1;
        }
    }
    
    return answer;
}