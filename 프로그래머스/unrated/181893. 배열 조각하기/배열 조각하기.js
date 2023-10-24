function solution(arr, query) {
    let arrCopy = [...arr];
    
    query.forEach((x, i) => {
        i % 2 === 0 ? arrCopy.splice(x + 1) : arrCopy.splice(0, x);
    });
    
    return arrCopy;
}