function solution(my_string) {
    var answer = [];
    
    answer = my_string.split('').filter(x => isNaN(x) === false).sort((a, b) => a - b)
    .map(x => parseInt(x));
    
    return answer;
}