function solution(l, r) {
    let answer = [];
    const regex = /^[05]+$/;
    
    for(let i = l; i <= r; i++) { 
        if(i.toString().match(regex)) answer.push(i);
    }
    
    if(answer.length === 0) answer.push(-1);
  
    return answer;
}