function solution(my_string, n) {
    var answer = '';
    
    answer = my_string.split('').map(x => x.repeat(n)).join('');
    
    return answer;
}