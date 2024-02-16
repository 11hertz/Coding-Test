function solution(n) {
    let arr = [];
    
    for(let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    
    for(let i = 2; i <= n / 2; i++) {
        for(let j = i * 2; j <= n; j += i) {
            if(arr[i] === 0) continue;
            arr[j] = 0;
        }
    }
    
    const res = arr.filter(x => x !== 0);
    console.log(res);
    
    return res.length;
}