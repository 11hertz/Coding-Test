function solution(citations) {
    let arr = [];
    citations.sort((a, b) => a - b);
    
    let max = 0;
    for(let i = 0; i < citations.length; i++) {
        let count = 0;
        for(let j = 0; j < citations.length; j++) {
            if(citations[i] <= citations[j]) count++;        
        }
        if(count <= citations[i]) arr.push(count);
        else arr.push(citations[i]);
    }
    
    return Math.max(...arr);
}