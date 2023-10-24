function solution(binomial) {
    let [x, oper, y] = binomial.split(' ');
    
    const func = {
        '+' : (x, y) => Number(x) + Number(y),
        '-' : (x, y) => x - y,
        '*' : (x, y) => x * y
    }
    
    const res = func[oper];
    return res(x, y);
}