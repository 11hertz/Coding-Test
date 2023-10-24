function solution(myString, pat) {
    let txtCopy = myString;
    let count = 0;
    
    for(let i = 0; i < txtCopy.length; i++) {
        let slicedTxt = txtCopy.slice(i);
        count += slicedTxt.startsWith(pat) ? 1 : 0;
    }
    
    return count;
}