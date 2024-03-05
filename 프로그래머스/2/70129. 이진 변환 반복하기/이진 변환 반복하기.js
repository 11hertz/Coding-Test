function solution(s) {
    let exeCount = 0;
    let zCount = 0;
    
    while(true) {
        exeCount++;
        for(let x of s) {
            if(x === '0') zCount++;
        }
        s = s.split('0').join('').length.toString(2);
        if(s === '1') break;
    }

    return [exeCount, zCount];
}