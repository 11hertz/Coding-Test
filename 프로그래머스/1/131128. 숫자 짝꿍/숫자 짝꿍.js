function solution(X, Y) {
    let answer = '';
    
    let arrX = Array.from({length: 10}, () => 0);
    let arrY = Array.from({length: 10}, () => 0);
    
    [...X].forEach((x) => arrX[x]++);
    [...Y].forEach((x) => arrY[x]++);

    for(let i = 9; i >= 0; i--) {
        if(arrX[i] === 0 && arrY[i] === 0) continue;
        answer += (arrX[i] > arrY[i]) 
            ? String(i).repeat(arrY[i])
            : String(i).repeat(arrX[i]);
    }
    if(answer.length < 1) return '-1'
    return [...answer].every((x)=> x=== '0')? '0' : answer
}