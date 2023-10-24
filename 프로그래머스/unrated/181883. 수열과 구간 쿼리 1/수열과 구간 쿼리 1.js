function solution(arr, queries) {
    let arrCopy = [...arr];
    
    queries.map(([x, y]) => {
        for(let i = x; i <= y; i++) {
            arrCopy[i] += 1; 
        }    
    })
    
    return arrCopy;
}