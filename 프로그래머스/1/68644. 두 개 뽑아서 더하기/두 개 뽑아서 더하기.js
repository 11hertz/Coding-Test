function solution(numbers) {
    var answer = [];

    const result = [];
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = 1; j < numbers.length; j++) {
            if(i !== j) {
              result.push(numbers[i] + numbers[j]);
            }
        }  
    }
    const arr = result.filter((val, idx) => {
        return result.indexOf(val) === idx; 
    });
    arr.sort(function(a, b){ return a-b; });
    answer = arr;
    return answer;
}