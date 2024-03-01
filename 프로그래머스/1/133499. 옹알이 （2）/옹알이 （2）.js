function solution(babbling) {
    let answer = 0;
    let arr = ['aya', 'ma', 'woo', 'ye'];

    let a = [];
    
    for(let i = 0; i < babbling.length; i++) {
        if(babbling[i].includes('ayaaya') || babbling[i].includes('mama') ||
          babbling[i].includes('woowoo') || babbling[i].includes('yeye')) continue;
        a.push(babbling[i]);
    }

    let b = a.map(x => x.replaceAll(/aya|ma|woo|ye/g, ''));

    return b.filter(x => x === '').length;
}