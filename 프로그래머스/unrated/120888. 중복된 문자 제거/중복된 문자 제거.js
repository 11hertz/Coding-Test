function solution(my_string) {
    var answer = '';
    let set = new Set(my_string.split(''));
    
    set.forEach((x) => answer += x);
    
    return answer;
}