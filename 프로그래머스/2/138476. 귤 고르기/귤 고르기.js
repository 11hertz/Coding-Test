function solution(k, tangerine) {
    let answer = 0;
    let arr = {};
    
    for(let x of tangerine) {
        if(arr[x]) arr[x] += 1;
        else arr[x] = 1;
    }
    
    arr = Object.entries(arr);
    arr.sort((a, b) => b[1] - a[1]);
    
    for(let [category, number] of arr) {
        k -= number;
        answer++;
        if(k <= 0) break;
    }
    
    
    
    return answer;
}