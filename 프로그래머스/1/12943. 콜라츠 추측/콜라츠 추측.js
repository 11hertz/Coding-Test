function solution(num) {
    var answer = 0;
    let count = 0;
   
    for(let i = 0; i < 500; i++) {
      if(num === 1) break;  
        
      if(num % 2 === 1) {
        num = num * 3 + 1;
        count++;
      } else if(num % 2 === 0) {
        num = num / 2;
        count++;
      } 
    }
    
    if(num === 1) {
      answer = count;
    } else {
      answer = -1;
    }
    
    return answer;
}