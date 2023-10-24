function solution(arr, intervals) {
    let [[a, b], [x, y]] = intervals;
     
    let arr1 = arr.slice(a, b + 1);
    let arr2 = arr.slice(x, y + 1);
    
    return [...arr1, ...arr2];
}