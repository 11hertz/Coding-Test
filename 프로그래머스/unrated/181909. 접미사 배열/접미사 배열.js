function solution(my_string) {
    let answer = [];
    let len = my_string.length;
    
    for(let i = 0; i < len; i++) {
        answer.push(my_string.slice(i));
    }
    
    return answer.sort();
}