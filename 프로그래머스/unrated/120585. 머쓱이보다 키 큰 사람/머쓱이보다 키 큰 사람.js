function solution(array, height) {
    var answer = 0;
    
    let arr = array.filter(x => x > height);
    answer = arr.length;
    
    return answer;
}