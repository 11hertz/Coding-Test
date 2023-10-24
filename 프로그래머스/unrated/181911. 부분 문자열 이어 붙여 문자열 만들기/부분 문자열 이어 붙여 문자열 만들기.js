function solution(my_strings, parts) {
    const devide = (x, y, text) => {
        return text.slice(x, y + 1);    
    }
    
    const len = my_strings.length;
    let answer = '';
    
    parts.forEach((x, i) => {
        answer += devide(x[0], x[1], my_strings[i]);       
    })

    return answer;  
}