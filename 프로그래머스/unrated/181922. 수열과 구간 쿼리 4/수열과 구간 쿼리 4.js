function solution(arr, queries) {
    let copyArr = [...arr];
    for(let x of queries) {
        let [a, b, c] = x;
        
        for(let i = a; i <= b; i++) {
            if(i % c === 0) copyArr[i] += 1;
        }    
    }
    return copyArr;
}