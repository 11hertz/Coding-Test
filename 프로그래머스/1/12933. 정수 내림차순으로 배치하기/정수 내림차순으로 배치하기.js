function solution(n) {
    var answer = 0;
    
    let arr = n.toString().split('').sort((a, b) => b - a);
    
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    answer = Number(str);
    return answer;
}