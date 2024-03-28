function solution(n, k) {
    const isPrime = (num) => {
	    if(num === 0 || num === 1) return false; 
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        } 
        return true; 
    }

    return n.toString(k).split(0).filter(x => isPrime(Number(x))).length;
}