function solution(balls, share) {
    let answer = 0;
    
    const fact = (x) => {
        let sum = 1;
        
        while(x > 1) {
            sum *= x;
            x--;
        } 
        return sum;
    }
    
    const factN = fact(balls);
    const factM = fact(share);
    const factNminusM = fact(balls-share);
    
    answer = Math.round(factN / (factNminusM * factM));
    
    return answer;
}