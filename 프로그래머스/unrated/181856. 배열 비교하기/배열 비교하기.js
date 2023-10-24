function solution(arr1, arr2) {
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    
    function sum(arr) {
        return arr.reduce((x, y) => x + y);
    }

    return arr1Len > arr2Len ? 1 : arr1Len < arr2Len ? -1 : 
    sum(arr1) > sum(arr2) ? 1 : sum(arr1) < sum(arr2) ? -1 : 0;
}