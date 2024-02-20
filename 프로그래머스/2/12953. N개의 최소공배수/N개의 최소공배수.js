function solution(arr) {
    let answer = 0;
    
    let max = Math.max(...arr);
    
    for(let i = max; ; i += max) {
        if(arr.every(x => i % x === 0)) {
            answer = i;
            break;
        }
    }
    
    return answer;
}