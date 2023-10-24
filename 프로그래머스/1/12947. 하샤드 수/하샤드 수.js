function solution(x) {
    var answer = true;
    
    let number = x;
    let sum = 0;
    
    do {
      sum = sum + (number % 10);
      number = Math.floor(number / 10);
    } while(number > 0)
    
    answer = (x % sum === 0) ? true : false;    
        
    return answer;
}