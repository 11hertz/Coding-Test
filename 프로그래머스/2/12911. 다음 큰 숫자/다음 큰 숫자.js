function solution(n) {
    let answer = 0;
    let flag = true;
    let number = n;
    let nOneLen = number.toString(2).split('').filter(x => x === '1').length;
    while(flag) {
        number++;
        let countOne = number.toString(2).split('').filter(x => x === '1').length;
        if(countOne === nOneLen) {
            answer = number;
            flag = false;
        }
    }
    
    return answer;
}