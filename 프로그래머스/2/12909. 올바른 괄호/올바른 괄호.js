function solution(s){
    let arr = [];
    
    for(let x of s) {
        if(x === '(') arr.push(x);
        if(x === ')') arr.pop();
    }

    return s[0] !== ')' && !arr.length;
}