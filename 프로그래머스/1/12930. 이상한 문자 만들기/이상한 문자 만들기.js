function solution(s) {
    let flag = true;
    
    const splitStr = s.split('').map(x => {
        let letter = '';
        if(x === ' ') {
            flag = true;
            return x;
        }
        if(flag) {
            letter = x.toUpperCase();
        } else {
            letter = x.toLowerCase();
        }
        flag = !flag;
        return letter;
    })

    return splitStr.join('');
}