function solution(a, b) {
    let answer = 0;
    let max = 1;
    
    for(let i = 1; i <= a; i++) {
        if(a % i === 0 && b % i === 0) max = i;
    }
    
    let ansB = b / max;
    
    while(ansB % 2 === 0) {
        ansB /= 2;
    }
    
    while(ansB % 5 === 0) {
        ansB /= 5;
    }
    
    
    return ansB === 1 ? 1 : 2;
}