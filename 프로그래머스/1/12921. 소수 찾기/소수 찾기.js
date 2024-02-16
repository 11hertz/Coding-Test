function solution(n) {
    let arr = [];
    
    for(let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        for(let j = i + i; j <= n; j += i) {
            if(arr[i] === 0) continue;
            arr[j] = 0;
        }
    }
    return arr.filter(x => x !== 0).length;
}