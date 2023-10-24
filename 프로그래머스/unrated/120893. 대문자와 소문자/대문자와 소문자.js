function solution(my_string) {
    var answer = '';

    answer = my_string.split('').
    map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');
    
    return answer;
}