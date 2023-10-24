function solution(arr) {
    let start = arr.indexOf(2, 0);
    let end = arr.lastIndexOf(2, arr.length);
    let slicedArr = arr.slice(start, end + 1);

    return slicedArr.length > 0 ? slicedArr : [-1];
}