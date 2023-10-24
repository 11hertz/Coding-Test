function solution(num, k) {
    var answer = 0;
    
    let index =  num.toString().split('').map(x => parseInt(x)).indexOf(k);
    
    if(index >= 0) {
        answer = index + 1;
    } else {
        answer = -1;
    }
    
    return answer;
}