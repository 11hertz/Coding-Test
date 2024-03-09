function solution(n) {
    let answer = 0;
    let flag = true;
    let number = n;
    let nLen = number.toString(2).match(/1/g).length;
   
    while(flag) {
        number++;
        let nextNumLen = number.toString(2).match(/1/g).length;
        if(nLen === nextNumLen) {
            answer = number;
            flag = false;
        }
    }
    
    return answer;
}