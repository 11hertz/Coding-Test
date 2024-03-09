function solution(n, m, section) {
    let answer = 0;
    let paintedNum = 0;
    
    for(let x of section) {
        if(paintedNum < x) {
            answer++;
            paintedNum = (x + m - 1);
        }
    } 
    
    return answer;
}