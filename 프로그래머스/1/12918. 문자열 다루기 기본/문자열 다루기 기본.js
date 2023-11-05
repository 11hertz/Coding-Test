function solution(s) {
    let answer = false;
    
    if((s.length === 4 && s.replace(/[0-9]/g, '').length === 0) ||
       (s.length === 6 && s.replace(/[0-9]/g, '').length === 0)) {
       answer = true;
    }
    
    return answer;
}