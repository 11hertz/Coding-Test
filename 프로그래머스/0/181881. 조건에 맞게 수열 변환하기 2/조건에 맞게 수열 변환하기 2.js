function solution(arr) {
    let answer = -1;
    let flag = true;
   
    while(flag) {
        let comp = false;
        answer++;
        arr = arr.map(x => {
            if (x >= 50 && x % 2 === 0) {
                comp = true;
                return x / 2;
            } else if(x < 50 && x % 2 === 1) {
                comp = true;
                return x * 2 + 1;
            }
            return x;
        });
        if(!comp) flag = false;
    }
    return answer;
}