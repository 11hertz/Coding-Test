function solution(n) {
    const arr = Array.from(Array(n), () => new Array(n));

    let rowStart = 0;
    let colStart = 0;
    let rowEnd = n - 1;
    let colEnd = n - 1;
    let count = 1;
    
    while(count <= n * n) { 
        for(let i = colStart; i <= colEnd; i++) {
            arr[rowStart][i] = count++;
        }   
        rowStart += 1;
        
        for(let i = rowStart; i <= rowEnd; i++) {
            arr[i][colEnd] = count++;
        }
        colEnd -= 1;
        
        for(let i = colEnd; i >= colStart; i--) {
            arr[rowEnd][i] = count++;
        }
        rowEnd -= 1;
        
        for(let i = rowEnd; i >= rowStart; i--) {
            arr[i][colStart] = count++;
        }
        colStart += 1;       
    }
    return arr;
}