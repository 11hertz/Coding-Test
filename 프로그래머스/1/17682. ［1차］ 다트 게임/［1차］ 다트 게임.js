function solution(dartResult) {
    let arr = [];
    
    for(let i = 0; i < dartResult.length; i++) {   
        if(arr[arr.length - 1] === '1' && dartResult[i] === '0') {
            arr.pop();
            arr.push(10);
        } else if(!isNaN(dartResult[i])) arr.push(dartResult[i]);
        if(dartResult[i] === 'S') {
            arr[arr.length - 1] **= 1;
        } else if(dartResult[i] === 'D') {
            arr[arr.length - 1] **= 2;
        } else if(dartResult[i] === 'T') {
            arr[arr.length - 1] **= 3;
        } else if(dartResult[i] === '*') {
            arr[arr.length - 1] *= 2;
            arr[arr.length - 2] *= 2;
        } else if(dartResult[i] === '#') {
            arr[arr.length - 1] *= -1;
        }
    }
   
    return arr.reduce((v, acc) => v + acc, 0);
}