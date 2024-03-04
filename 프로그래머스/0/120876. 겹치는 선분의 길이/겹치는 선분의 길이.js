function solution(lines) {
    let answer = 0;
    
    let s = new Set();
    
    for(let i = lines[0][0]; i < lines[0][1]; i++) {
        for(let j = lines[1][0]; j < lines[1][1]; j++) {
            for(let k = lines[2][0]; k < lines[2][1]; k++) {
                if(i === j) s.add(i);
                if(j === k) s.add(j);
                if(i === k) s.add(k);
            }
        }
    }
    
    return s.size;
}