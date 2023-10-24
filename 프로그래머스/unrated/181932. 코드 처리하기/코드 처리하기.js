function solution(code) {
    let ret = '';
    let mode = 0;
    
    for(let i = 0; i < code.length; i++) {
        mode = code[i] === '1' ? Number(!mode) : Number(mode);
        
        if(mode === 0 && code[i] !== '1' && i % 2 === 0) ret += code[i];
        if(mode === 1 && code[i] !== '1' && i % 2 === 1) ret += code[i];
    }
    return ret || 'EMPTY';
}