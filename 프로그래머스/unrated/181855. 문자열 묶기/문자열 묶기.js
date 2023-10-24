function solution(strArr) {
    let arr = Array.from({length: 30}, x => 0);
    let len = strArr.length
    
    strArr.forEach((v, _) => {
        let strLen = v.length;
        arr[strLen - 1] += 1;
    });
    
    return Math.max(...arr);
}