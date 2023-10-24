function solution(order) {
    var answer = 0;
    
    answer = order.toString()
        .split('')
        .map(x => parseInt(x))
        .filter(x => (x === 3 || x === 6 || x === 9)).length;
    
    return answer;
}