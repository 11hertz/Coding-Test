function solution(n) {
    let answer = 0;
    let cache = {};
    const r = 1234567;
    
    let fibo = (num) => {
        if(num === 1 || num === 2) return num % r;
        if(!(num in cache)) {
            cache[num] = fibo(num - 1) % r+ fibo(num - 2) % r; 
        }
        return cache[num] % r;
    }    
    return fibo(n) % r;
}