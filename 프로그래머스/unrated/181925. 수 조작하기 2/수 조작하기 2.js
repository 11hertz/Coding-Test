function solution(numLog) {
    let answer = '';
    
    for(let i = 1; i < numLog.length; i++) {
        (numLog[i] - numLog[i - 1] === 1) ? answer += 'w' :
        (numLog[i] - numLog[i - 1] === -1) ? answer += 's' :
        (numLog[i] - numLog[i - 1] === 10) ? answer += 'd' :
        answer += 'a'
    }
    
    return answer;
}

