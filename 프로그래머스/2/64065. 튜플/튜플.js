function solution(s) {
    let arr = [...s].map(x => x.replaceAll('{', '')).map(x => x.replaceAll('}', '')).join('').split(',');
    let map = new Map();
    
    for(let x of arr) {
        if(map.has(x)) map.set(x, map.get(x) + 1);
        else map.set(x, 1);
    }
    
    let resArr = Array.from(map);
  
    return resArr.sort((a, b) => b[1] - a[1]).map(x => +x[0]);
}