function solution(k, score) {
    let answer = [];
    let mjScore = [];
    
    for(let i = 0; i < score.length; i++) {
        mjScore.push(score[i]);
        mjScore.sort((a, b) => b - a);
        let mjSlice = mjScore.slice(0, k);
        answer.push(Math.min(...mjSlice));
    }
    
    return answer;
}