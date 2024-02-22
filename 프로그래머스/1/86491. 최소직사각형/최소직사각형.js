function solution(sizes) {
    const arr = sizes.map(x => x.sort((a, b) => a - b));
    
    let max0 = arr[0][0];
    let max1 = arr[0][1];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i][0] > max0) max0 = arr[i][0];    
        if(arr[i][1] > max1) max1 = arr[i][1]; 
    }
 
    return max0 * max1;
}