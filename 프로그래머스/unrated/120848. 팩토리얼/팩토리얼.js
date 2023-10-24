function solution(n) {
    const fact = (x) => (x != 1) ? x * fact(x - 1) : 1;
    let answer = 0;
    
    for(let i = 1; i < 10; i++) {
        let f1 = fact(i);
        let f2 = fact(i + 1);
        
        if (f1 <= n && n < f2) {
            answer += i;  
            break;
        }
        if (n === f2) {
            answer += i + 1;
            break;
        }
    }
    
    return answer;
}