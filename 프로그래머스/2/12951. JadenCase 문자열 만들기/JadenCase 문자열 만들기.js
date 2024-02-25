function solution(s) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    let arr = s.split('').map(x => x.replace(/[A-Z]/, x.toLowerCase()));
    
    for(let i = 0; i < arr.length; i++) {
        if(alpha.includes(arr[0])) arr[0] = arr[0].toUpperCase();
        if(arr[i - 1] === ' ' && arr[i] !== ' ') arr[i] = arr[i].toUpperCase();
    }
    return arr.join('');
}