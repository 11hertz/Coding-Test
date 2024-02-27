function solution(n, t, m, p) {
    let answer = '';
    
    let str = '';
    
    for(let i = 0; i <= 50000; i++) {
        let num = i.toString(n).toUpperCase();
        str += num;
    }
    
    for(let i = p - 1; i <= str.length; i += m){ 
        answer += str[i];
        if(answer.length === t) break;
    }
    
    return answer;
}