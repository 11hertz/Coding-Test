function solution(emergency) {
    let arr = Array.from({length: emergency.length}, x => 1);
    let len = emergency.length;
    
    for(let i = 0; i < len - 1; i++) {
        for(let j = i + 1; j < len; j++) {
            emergency[i] < emergency[j] ? arr[i] += 1 : 
            emergency[i] > emergency[j] ? arr[j] += 1 : 0;
        }
    }
    
    return arr;
}