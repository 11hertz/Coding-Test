function solution(n) {
    const number = n.toString(3).split('').reverse().join('');
    return parseInt(number, 3);
}