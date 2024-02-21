function solution(answers) {
    let answer = [];
    
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let p1Score = 0;
    let p2Score = 0;
    let p3Score = 0;
    
    for(let i = 0; i <= answers.length; i++) {
        if(p1[i % p1.length] === answers[i]) p1Score++;  
        if(p2[i % p2.length] === answers[i]) p2Score++;    
        if(p3[i % p3.length] === answers[i]) p3Score++;  
    }
    
    const max = Math.max(p1Score, p2Score, p3Score);
    
    [p1Score, p2Score, p3Score].forEach((x, i) => {
        if(x === max) answer.push(i + 1);
    })

    return answer;
}