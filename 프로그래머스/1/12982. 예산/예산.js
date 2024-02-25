function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        answer = i + 1;
        if(sum > budget) {
            answer -= 1;
            break;
        }
    }
    return answer;
}