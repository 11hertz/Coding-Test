function solution(brown, yellow) {
    let sum = brown + yellow;
    let arr = [];
    
    for(let i = 1; i <= Math.sqrt(sum); i++) {
        let r = sum / i;
        if(sum % i === 0 && ((i - 2) * (r - 2)) === yellow) {
            if(r > i) arr.push(r, i);
            else arr.push(i, r);
        }
    }
    return arr;
}