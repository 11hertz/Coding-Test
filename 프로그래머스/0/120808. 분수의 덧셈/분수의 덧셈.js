function solution(numer1, denom1, numer2, denom2) {
    const findGcd = (x, y) => {
        let temp = 0; 
        while(y !== 0) { 
            temp = x % y; 
            x = y; 
            y = temp; 
        } 
        return x;   
    }

    const numer = denom1 * numer2 + denom2 * numer1;
    const denom = denom1 * denom2;
    const gcd = findGcd(numer, denom);

    return [(numer/gcd), (denom/gcd)];
}