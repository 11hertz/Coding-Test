function solution(arr) {
    let answer = [...arr];
    
    const rowLen = arr[0].length;
    const colLen = arr.length;
    
    if(rowLen === colLen) return answer;
    
    const bigLen = (rowLen > colLen) ? rowLen : colLen;
    const shortLen = (rowLen > colLen) ? colLen : rowLen;
    
    const pushArr = Array(bigLen).fill(0);
    
    for(let i = shortLen + 1; i <= bigLen; i++) {
        if(shortLen === colLen) {
            answer.push(pushArr);    
        } else {
            answer.forEach(x => x.push(0));
        }
    }
    
    
    return answer;
}