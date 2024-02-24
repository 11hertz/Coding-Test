function solution(board) {
    let answer = 0;
    const mine = [];
    const dz = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] === 1) mine.push([i, j]);
        }
    }

    console.log(mine);
    
    for(let i = 0; i < mine.length; i++) {
        for(let k = 0; k < dz.length; k++) {
            let x = mine[i][0] + dz[k][0];
            let y = mine[i][1] + dz[k][1];
            if(x >= 0 && x < board.length && y >= 0 && y < board.length) board[x][y] = 1;
        }
    }
   
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] === 0) answer += 1;
        }
    }
    
    return answer;
}