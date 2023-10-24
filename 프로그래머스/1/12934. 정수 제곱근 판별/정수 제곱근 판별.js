function solution(n) {
    var answer = 0;
    
    let number = Math.sqrt(n);
    
    if(n % number === 0) {
        answer = (number+1) ** 2;
    } else {
        answer = -1;
    }
    
    
    return answer;
}