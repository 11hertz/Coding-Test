function solution(array) {
    var answer = 0;
    
    let num = Math.floor(array.length / 2);
    array.sort((a, b) => a - b);
    
    answer = array[num];
    
    return answer;
}