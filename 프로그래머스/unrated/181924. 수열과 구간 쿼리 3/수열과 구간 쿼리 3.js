function solution(arr, queries) {
    let copyArr = [...arr];
    queries.forEach(([x, y]) => {
        [copyArr[x], copyArr[y]] = [copyArr[y], copyArr[x]];
    });
    
    return copyArr;
}