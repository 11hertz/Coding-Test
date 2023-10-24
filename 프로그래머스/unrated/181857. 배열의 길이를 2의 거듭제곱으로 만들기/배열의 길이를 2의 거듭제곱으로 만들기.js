function solution(arr) {
    let arrCopy = [...arr];
    let len = arr.length;
    
    for(let i = 0; i <= 10; i++) {
        let num = 2 ** i;
        
        if(num === len) break;
        if(num > len) {
            for(let j = 0; j < num - len; j++) {
                arrCopy.push(0);
            }
            break;
        }
    }
    
    return arrCopy;
}