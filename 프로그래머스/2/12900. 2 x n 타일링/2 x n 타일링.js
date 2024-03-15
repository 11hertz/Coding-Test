function solution(n) {
    let answer = 0;
    
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    
    for(let i = 2 % 1000000007; i <= n % 1000000007; i++) {
        arr[i] = arr[i - 2] % 1000000007 + arr[i - 1] % 1000000007;
    }
    
    return arr[arr.length - 1] % 1000000007;
}