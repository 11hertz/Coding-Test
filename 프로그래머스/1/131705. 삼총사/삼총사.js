function solution(number) {
    let arr = [];
    
    for(let i = 0; i < number.length - 2; i++) {
        for(let j = i + 1; j < number.length - 1; j++) {
            for(let k = j + 1; k < number.length; k++) {
                if(number[i] + number[j] + number[k] === 0) arr.push([i, j, k]);
            }
        }
    }
    
    return arr.length;
}