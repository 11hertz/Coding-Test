function solution(k, m, score) {
    let answer = 0;
    
    let arr = score.sort((a, b) => b - a);
    
    for(let i = 1; i <= score.length / m; i += 1) {
        answer += score[m * i - 1] * m;
    }
    
    return answer;
}