function solution(numbers) {
    var answer = -1;
    
    let sum = 45;
    for(let i = 0; i < numbers.length; i++) {
        sum -= numbers[i];
    }
    
    answer = sum;
    return answer;
}