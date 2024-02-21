function solution(t, p) {  
    const arr = [];
    const len = p.length;
    
    for(let i = 0; (i + len) <= t.length; i++) {
        arr.push(t.slice(i, i + len));
    }

    return arr.filter(x => Number(x) <= Number(p)).length;;
}