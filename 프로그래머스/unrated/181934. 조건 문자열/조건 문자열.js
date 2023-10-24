function solution(ineq, eq, n, m) {
    const oper = {
        '>=' : (n, m) => n >= m,
        '<=' : (n, m) => n <= m,
        '>!' : (n, m) => n > m,
        '<!' : (n, m) => n < m
    }
    
    const comp = oper[ineq + eq];    
    
    return Number(comp(n, m));
}