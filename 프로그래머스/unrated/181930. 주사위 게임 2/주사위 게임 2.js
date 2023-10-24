function solution(a, b, c) {
    let score1 = a + b + c;
    let score2 = score1 * (a ** 2 + b ** 2 + c ** 2);
    let score3 = score2 * (a ** 3 + b ** 3 + c ** 3);
    
    if(a === b && b === c) {
        return score3;
    } else if((a === b || b === c || a === c)) {
        return score2;
    } else {
        return score1;
    }
}