function solution(s) {
    var answer = '';
    
    let arr = s.split(' ').map((x) => parseInt(x));
    
    answer = Math.min(...arr) + ' ' + Math.max(...arr);
    
    return answer;
}