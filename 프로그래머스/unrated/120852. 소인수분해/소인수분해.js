function solution(n) {
    const answer = [];
    
    while(n > 1) {
        for(let i = 2; i <= n; i++) {
            if(n % i === 0) {
                answer.push(i);
                n = Math.floor(n / i);
                break;
            }
        }
    }
    return [...new Set(answer)];
}