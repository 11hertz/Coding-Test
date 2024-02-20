function solution(n, m) {
    const max = Math.max(m, n);
    const min = Math.min(m, n);
    
    const findGcd = (max, min) => {
        let r = 0;
        while (min !== 0){
            r = max % min;
            max = min;
            min = r;
        }
        return max;
    }
    
    const gcd = findGcd(max, min);   
    const findLcm = (max, min) => (max * min) / gcd;  
    const lcm = findLcm(max, min);

    return [gcd, lcm];
}