function solution(my_strings, parts) {
    let answer = '';
    parts.forEach(([num1, num2], i) => answer += my_strings[i].slice(num1, num2 + 1));

    return answer;  
}