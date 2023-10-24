function solution(arr, k) {
    let answer = [];
    
    for(let x of arr) {
        if(answer.length === k) break;
        if(!answer.includes(x)) answer.push(x);
    }
    
    if(answer.length < k) {
        for(let i = answer.length; i < k; i++) {
            answer.push(-1);
        }
    }
    return answer;
}