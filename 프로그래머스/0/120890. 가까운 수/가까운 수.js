function solution(array, n) {
    let answer = 0;
    
    const arr = array.map(x => Math.abs(x - n));
    
    const min = Math.min(...arr);
    
    const tempArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(min === arr[i]) tempArr.push(i);
    }    
    if(tempArr.length === 2) {
        answer = (array[tempArr[0]] > array[tempArr[1]]) 
            ? array[tempArr[1]] : array[tempArr[0]];
    } else {
        answer = array[tempArr[0]]
    }
    return answer;
}