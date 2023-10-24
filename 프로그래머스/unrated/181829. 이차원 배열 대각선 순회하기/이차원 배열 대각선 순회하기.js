function solution(board, k) {
    let sum = 0;
    let len = board.length;
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if((i + j) <= k) sum += board[i][j];
            console.log(board[i][j], sum);
        }
    }
    
    return sum;
}