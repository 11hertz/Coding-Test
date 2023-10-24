function solution(i, j, k) {
    let txtNum = '';
    
    for(let x = i; x <= j; x++) {
        txtNum += x;
    }
    
    return txtNum.split(k).length - 1;
}