function solution(n) {
    let answer = Array.from(Array(n), () => Array(n).fill(0));
    let len = answer.length;
    
    for(let i = 0; i < len; i++) {
        answer[i][i] = 1;
    }
            
    return answer;
}