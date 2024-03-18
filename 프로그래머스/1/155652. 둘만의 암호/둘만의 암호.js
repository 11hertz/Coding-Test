function solution(s, skip, index) {
    let answer = '';
    
    let alpha = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 97))
    .filter(x => !skip.includes(x));
    
    for(let i = 0; i < s.length; i++) {
        let str = alpha.indexOf(s[i]) + index;
        if(str >= alpha.length) str %= alpha.length;
        answer += alpha[str];
    }
    
    return answer;
}