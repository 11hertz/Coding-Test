function solution(n) {
    var answer = 0;
    let x = 1;
    do {
      if(n % x === 0) answer++;
      x++;
    } while(x <= n)
    
    return answer;
}