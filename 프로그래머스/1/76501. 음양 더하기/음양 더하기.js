function solution(absolutes, signs) {
    var answer = 123456789;
    let sum = 0;
    
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] === false) {
            absolutes[i] = absolutes[i] * -1
        }
        sum += absolutes[i];
    }
    answer = sum;
    return answer;
}