function solution(nums) {
    const isPrime = (num) => {
        if(num === 1) return false;
        for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
            if(num % i === 0) return false;    
        }
        return true;
    }
    
    let arr = [];
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                arr.push(nums[i] + nums[j] + nums[k]);
            }
        }    
    }

    return arr.filter(x => isPrime(x)).length;
}