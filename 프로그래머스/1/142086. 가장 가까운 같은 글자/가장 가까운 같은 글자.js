function solution(s) {
    let answer = [];
    const hash = {};
    
    answer = s.split('').map((x, i) => {
        let ret = 0;
        if(hash[x] || hash[x] === 0) {
            ret =  i - hash[x];  
            hash[x] = i;
        } else {
            hash[x] = i;
            return -1;
        }
        
        return ret;
        
    });

    return answer;
}