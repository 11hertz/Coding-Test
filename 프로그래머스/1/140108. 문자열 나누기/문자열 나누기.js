function solution(s) {
    let answer = 0;
    
    let stdStr = s[0];
    
    let lt = 0;
    let rt = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === stdStr) lt++
        else rt++
        
        if(lt === rt) {
            answer++
            stdStr = s[i + 1];
            lt = 0;
            rt = 0;
        }
    }
    
    if(lt !== rt) answer++;
    
    return answer;
}