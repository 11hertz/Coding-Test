function solution(topping) {
    let answer = 0;
    
    let map1 = new Map();
    let map2 = new Map();
    
    for(let x of topping) {
        if(map2.has(x)) map2.set(x, map2.get(x) + 1);
        else map2.set(x, 1);
    }
    
    for(let x of topping) {
        if(map1.size === map2.size) answer++;
        if(map2.has(x)) {
            map2.set(x, map2.get(x) - 1);
            if(map2.get(x) === 0) map2.delete(x);
        }
        
        if(map1.has(x)) map1.set(x, map1.get(x) + 1);
        else map1.set(x, 1);
    }
    
    return answer;
}