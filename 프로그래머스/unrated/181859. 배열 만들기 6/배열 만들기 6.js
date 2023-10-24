function solution(arr) {
    let stk = [];
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        if(stk.length === 0) {
            stk.push(arr[i]);
        } else if(arr[i] === stk[stk.length - 1]) {
            stk.pop();
        } else if(arr[i] !== stk[stk.length - 1]) {
            stk.push(arr[i]);
        }
    }
    
    return stk.length === 0 ? [-1] : stk;
}