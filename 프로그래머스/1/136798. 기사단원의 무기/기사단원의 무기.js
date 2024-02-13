function solution(number, limit, power) { 
    let answer = 1;
   
    const yaksu = (x) => {
        let count = 0;
        for(let i = 1; i <= x / 2; i++) {
            if(x % i === 0) count++;
        }
        return (count < limit) ? count + 1 : power;
    }
    
    for(let i = 1; i < number; i++) {
        answer += yaksu(i + 1);
    }
    
    return answer;
}