function solution(arr) {
    let stk = [];
    let arrLen = arr.length;
    let i = 0;
    
    while(i < arrLen) {
        let stkLen = stk.length;
        if(stk.length === 0 || arr[i] > stk[stkLen - 1]) {
            stk.push(arr[i]);
            i += 1;
        }
      
        if(stk.length !== 0 && arr[i] <= stk[stkLen - 1]) {
            stk.pop();
        }
    }

    return stk;
}