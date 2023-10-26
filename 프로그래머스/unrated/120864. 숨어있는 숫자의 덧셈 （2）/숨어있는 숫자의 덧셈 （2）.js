function solution(my_string) {
    let answer = my_string.split(/[a-zA-Z]/).reduce((acc, v) => 
        Number(v) + acc, 0);
    return answer;
}