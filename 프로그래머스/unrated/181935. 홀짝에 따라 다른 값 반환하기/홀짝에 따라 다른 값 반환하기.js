function solution(n) {
    return n % 2 === 1 ? sumOdds(n) : squareSum(n);     
}

function sumOdds(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        i % 2 === 1 ? sum += i : 0;    
    }    
    return sum;
}

function squareSum(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        i % 2 === 0 ? sum += (i ** 2) : 0;    
    }     
    return sum;
}