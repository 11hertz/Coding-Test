function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    const arr = d.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        answer = i + 1;
        if(sum > budget) {
            answer -= 1;
            break;
        }
    }
    
    console.log(sum);
    
    return answer;
}