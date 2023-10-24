function solution(arr) {
    var answer = [];
    
    answer = arr.filter(x => (Math.min(...arr) !== x));
    if(answer.length === 0) answer.push(-1);
    
    return answer;
}