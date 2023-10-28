function solution(common) {
    let answer = 0;
    
    const temp1 = (common[2] - common[1]);
    const temp2 = (common[1] - common[0]);
    const temp3 = (common[1] / common[0]);
    
    
    let compAPGS = (temp1 === temp2) ? 'AP' : 'GS';
    
    
    
    
    if(compAPGS === 'AP') {
        answer = common[common.length - 1] + temp1;
    } else {
        answer = common[common.length - 1] * temp3;
    }
    
    
    return answer;
}