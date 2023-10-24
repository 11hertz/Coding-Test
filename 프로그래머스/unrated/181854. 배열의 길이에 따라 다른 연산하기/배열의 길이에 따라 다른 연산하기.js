function solution(arr, n) {
    let len = arr.length;
    
    return len % 2 === 1 
    ? arr.map((x, i) => i % 2 === 0 ? x + n : x)
    : arr.map((x, i) => i % 2 === 1 ? x + n : x);    
}