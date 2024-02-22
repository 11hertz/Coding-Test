function solution(A, B) {
    let answer = 0;
    let arr = [...A];
    let count = 0;
    
    for(let i = 0; i < A.length; i++) {
        if(arr.join('') === B) return count;
        let str1 = arr.pop();
        arr.unshift(str1);
        count += 1;
    }
    
    return (count !== A.length) ? count : -1;
}