function solution(s, n) {
    const arr = s.split('').map(x => {
        let str = x.charCodeAt();
        if(str >= 65 && str <= 90) return String.fromCharCode((str + n - 65) % 26 + 65);
        if(str >= 97 && str <= 122) return String.fromCharCode((str + n - 97) % 26 + 97);
        return ' ';
    });

    return arr.join('');
}