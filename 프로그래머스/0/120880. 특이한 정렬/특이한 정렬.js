function solution(numlist, n) {
    const arr = numlist.map((x, i) => [x, Math.abs(x - n)]).sort((a, b) =>  b[1] - a[1] || a[0] - b[0]).reverse();
 
    console.log(arr);
    
    return arr.map(x => x[0]);
}