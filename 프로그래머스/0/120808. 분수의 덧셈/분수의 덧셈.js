function solution(numer1, denom1, numer2, denom2) {
    let max = Math.max(denom1, denom2);
    let min = Math.min(denom1, denom2);
    let commonDen = 0;
    
    for(let i = min; i <= (max * min); i += min) {
        if(i % max === 0) {
            commonDen = i;
            break;
        }
    }
    
    let numer = (numer1 *= commonDen / denom1) + (numer2 *= commonDen / denom2);
   
    const findGcd = (x, y) => {
        if(x === y) return x;
        let big = (x > y) ? x : y;
        let small = (x > y) ? y : x;
        
        let temp = 0; 
        while(small !== 0) { 
            temp = big % small; 
            big = small; 
            small = temp; 
        } 
        return big;   
    }

    const divider = findGcd(numer, commonDen);

    return [(numer/divider), (commonDen/divider)];
}