function solution(sides) {
    let answer = 0;
    sides.sort((a, b) => a - b);
    
    const sideA = sides[0];
    const sideB = sides[1];
    
    for(let i = (sideB - sideA + 1); i <= sideB; i++) {
        answer += 1;    
    }
    
    for(let i = (sideB + 1); i < (sideA + sideB); i++) {
        answer += 1;
    }
    
    return answer;
}