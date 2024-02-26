function solution(msg) {
    const answer = [];
    const alpha = [];
    let tempArr = [];
    for(let i = 0; i < 26; i++) {
        alpha.push(String.fromCharCode(65 + i));  
    }

    for(let i = 0; i < msg.length; i++) {
        tempArr.push(msg[i]);
        if(alpha.includes(tempArr.join(''))) continue;
        alpha.push(tempArr.join(''));
        tempArr.pop();
        let idx = alpha.indexOf(tempArr.join(''));
        answer.push(idx + 1);
        tempArr = [];
        i -= 1;
    }
    let idx = alpha.indexOf(tempArr.join('')) + 1;
    answer.push(idx);
    
    return answer;
}