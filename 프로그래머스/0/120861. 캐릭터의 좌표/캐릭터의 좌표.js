function solution(keyinput, board) {
    let answer = [0, 0];
    const arrow = [['up',  [0, 1]], ['down',  [0, -1]], ['left',  [-1, 0]], ['right',  [1, 0]]];
    
    const limitX = [parseInt(board[0] / 2), -parseInt(board[0] / 2)]; 
    const limitY = [parseInt(board[1] / 2), -parseInt(board[1] / 2)];

    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === 'up') {
            answer[0] += arrow[0][1][0];
            answer[1] += arrow[0][1][1];
        } else if(keyinput[i] === 'down') {
            answer[0] += arrow[1][1][0];
            answer[1] += arrow[1][1][1];
        } else if(keyinput[i] === 'left') {
            answer[0] += arrow[2][1][0];
            answer[1] += arrow[2][1][1];
        } else if(keyinput[i] === 'right') {
            answer[0] += arrow[3][1][0];
            answer[1] += arrow[3][1][1];
        }

        if(answer[0] > limitX[0]) answer[0] = limitX[0];
        if(answer[0] < limitX[1]) answer[0] = limitX[1];
        if(answer[1] > limitY[0]) answer[1] = limitY[0];
        if(answer[1] < limitY[1]) answer[1] = limitY[1];

    }
    return answer;
}