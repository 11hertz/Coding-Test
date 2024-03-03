function solution(n) {
    const r = 1234567;
    let arr = [0, 1];
    
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i - 2] % r + arr[i - 1] % r;
    }
    
    return arr[n] % r;
}