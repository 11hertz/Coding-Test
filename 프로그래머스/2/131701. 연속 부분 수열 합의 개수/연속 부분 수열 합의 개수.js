function solution(elements) {
    let set = new Set();
    
    for(let i = 0; i < elements.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            let num = elements.slice(0, i + 1).reduce((x, acc) => x + acc, 0);
            set.add(num);
            elements.push(elements.shift());
        }
    }
    
    return set.size;
}