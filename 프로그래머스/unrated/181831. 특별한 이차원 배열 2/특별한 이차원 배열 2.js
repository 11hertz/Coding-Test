function solution(arr) {
    let len = arr.length;
    let total = len ** 2;
    let count = 0;
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            count += arr[i][j] === arr[j][i] ? 1 : 0;    
        }
    }
    return total === count ? 1 : 0;
}