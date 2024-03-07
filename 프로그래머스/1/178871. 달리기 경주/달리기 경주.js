function solution(players, callings) {
    let answer = [];
    let playerRank = {};
    let rankBoard = {};
    
    for(let i = 1; i <= players.length; i++) {
        let player = players[i - 1];
        playerRank[player] = i;
        rankBoard[playerRank[player]] = player;
    }

    for(let i = 0; i < callings.length; i++) {
        let loser = playerRank[callings[i]] - 1;
        let winner = playerRank[callings[i]];
        
        playerRank[rankBoard[loser]] += 1;
        playerRank[rankBoard[winner]] -= 1;
       
        [rankBoard[loser], rankBoard[winner]] = [rankBoard[winner], rankBoard[loser]];
    }
 
    return Object.values(rankBoard);
}