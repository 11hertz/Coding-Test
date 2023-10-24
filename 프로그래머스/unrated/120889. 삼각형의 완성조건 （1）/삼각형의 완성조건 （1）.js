function solution(sides) {
    var answer = 0;
    
    let sum = 0;
    let maxSize = Math.max(...sides);
    for(let x of sides) {
        sum += x;
    }
  
    answer = ((sum - maxSize) > maxSize) ? 1 : 2;
    
    
    return answer;
}