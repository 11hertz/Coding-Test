function solution(array) {
    var answer = 0;
    
    answer = array.join('').split('').filter(x => x === '7').length;
    return answer;
}