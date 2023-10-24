function solution(arr, flag) {
    let answer = [];
    let flagLen = flag.length;
    
    for(let i = 0; i < flagLen; i++) {
        let t = arr[i];
        if(flag[i]) {
            for(let j = 0; j < t * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            for(let j = 0; j < t; j++) {
                answer.pop();
            }
        }
    }
    
    return answer;
}