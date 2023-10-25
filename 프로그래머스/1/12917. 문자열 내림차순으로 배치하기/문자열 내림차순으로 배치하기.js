function solution(s) {
    const answer = s.split('').sort().reverse().join('');
    
    console.log(answer);
    return answer;
}