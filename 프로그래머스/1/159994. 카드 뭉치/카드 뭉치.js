function solution(cards1, cards2, goal) {
    let answer = '';
    let compArr = [];
    
    let c1 = 0;
    let c2 = 0;
    
    for(let i = 0; i < goal.length; i++) {
        if(cards1[c1] === goal[i]) c1++; 
        if(cards2[c2] === goal[i]) c2++;
    }
    
    return (c1 + c2 === goal.length) ? 'Yes' : 'No';
}