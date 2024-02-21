function solution(num, total) {
    let answer = [];
    
    let mid = (total % num === 0) ? (total / num) : parseInt((total / num));
    let evenMid = mid + 1;
    let count = 1;

    answer.push(mid);
    if(num % 2 === 0) {
        answer.push(evenMid);
    }
    
    while(answer.length < num) {
        if(num % 2 !== 0) {
            answer.push(mid + count);
            answer.push(mid - count);        
        } else {
            answer.push(evenMid + count);
            answer.push(mid - count);    
        }
        count++;
    }
    return answer.sort((a, b) => a - b);
}