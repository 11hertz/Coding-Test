function solution(array) {
    const temp = Array(1000).fill(0);
    array.forEach(x => temp[x] += 1);
    
    const max = Math.max(...temp);   
    let res = [];
    temp.forEach((x, i) => {
        if(max === x) res.push(i); 
    });

    return (res.length === 1) ? res[0] : -1;
}