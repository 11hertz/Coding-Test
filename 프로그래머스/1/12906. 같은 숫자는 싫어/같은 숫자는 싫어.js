function solution(arr)
{
    const answer = [];
    const len = arr.length;
    let strLen = 0;
    answer.push(arr[0])
    for(let i = 1; i < len; i++) {
        if(arr[i] === arr[i - 1]) { 
            continue;    
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}