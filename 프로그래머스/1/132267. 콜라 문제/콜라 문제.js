function solution(a, b, n) {
    let answer = 0;
    let coke = n;
    
    while(a <= coke) {
        answer += parseInt(coke / a) * b;
        let res = coke % a;
        coke = parseInt(coke / a) * b + res;
    }
    return answer;
}