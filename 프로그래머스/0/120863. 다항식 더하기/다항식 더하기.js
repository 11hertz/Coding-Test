function solution(polynomial) {
    const xArr = polynomial.split(' + ').filter(x => x.includes('x'));
    const numArr = polynomial.split(' + ').filter(x => !x.includes('x'));
    
    let xTerm = xArr.map(x => Number(x.replace('x', '')) || 1).reduce((v, acc) => v + acc, 0);
    let numTerm = numArr.map(x => Number(x)).reduce((v, acc) => v + acc, 0);

    if(xTerm && numTerm) {
        return (xTerm === 1) ? `x + ${numTerm}` : `${xTerm}x + ${numTerm}`;   
    } else if(xTerm && !numTerm) {
        return (xTerm === 1) ? 'x' : `${xTerm}x`;   
    } else if(!xTerm && numTerm) {
        return `${numTerm}`;   
    } 
}