function solution(n) {
    var answer = 0;
    
    let num = 1;
    
    while(true) {
        if((num % n === 0) && (num % 6 === 0)) break;
        num++;
    }
    
    answer = num / 6;
    
    return answer;
}