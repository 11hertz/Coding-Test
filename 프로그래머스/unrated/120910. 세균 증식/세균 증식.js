function solution(n, t) {
    var answer = 0;
    
    let sum = n;
    for(let i = 0; i < t; i++) {
        sum *= 2;
    }
    answer = sum;
    return answer;
}