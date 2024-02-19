function solution(today, terms, privacies) {
    let answer = [];
    
    const [Y, M, D] = today.split('.');
    const todayNum = Number(Y) * 12 * 28 + Number(M) * 28 + Number(D);
    
    const splitPriv = privacies.map(x => x.split(' '));
    const splitTerms = terms.map(x => x.split(' '));
    
    const res = splitPriv.map(x => {
        const priv = x[0].split('.');
        let times = 0;
        splitTerms.forEach(t => {
            if(t[0] === x[1]) times = +t[1];
        })
        
        let year = Number(priv[0]);
        let month = Number(priv[1]);
        let day = Number(priv[2]);
        
        while(times) {
            month += 1;
            if(month > 12) {
                year += 1;
                month = 1;
            } 
            times--;
        }
        const sum = year * 12 * 28 + month * 28 + day;
        return sum;
    });
    
    res.forEach((x, i) => {
        if(x <= todayNum) answer.push(i + 1)
    });
    
    return answer;
}