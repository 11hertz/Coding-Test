function solution(myString) {
    return [...myString].map(x => x > 'l' ? x : 'l').join('');
}