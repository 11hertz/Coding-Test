function solution(n) {
    let answer = 0;
    let arr = new Array(201).fill(0);
    
    for(let i = 1; i <= 200; i++) {
        if(i % 3 === 0) continue;
        if([...String(i).split('')].includes('3')) continue;
        arr[i] = i;
    }
 
    return arr.filter(x => x !== 0)[n - 1];
}