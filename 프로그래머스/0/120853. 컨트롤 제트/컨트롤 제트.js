function solution(s) {
    let answer = 0;
    
    const arr = s.split(' ');
    
    for(let i = 0; i < arr.length; i++) {
        answer += (arr[i] === 'Z') ? Number(arr[i - 1]) * -1 : Number(arr[i]);
    }
    
    return answer;
}