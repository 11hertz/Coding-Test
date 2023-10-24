function solution(my_string, m, c) {
    let answer = '';
    let len = my_string.length;
    
    
    for(let i = 0; i < len; i++) {
        if(i % m === c - 1) answer += my_string[i];
    }
    
    return answer;
}