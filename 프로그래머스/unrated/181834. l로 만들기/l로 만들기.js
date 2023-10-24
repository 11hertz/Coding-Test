function solution(myString) {
    const letter = 'l';
    return [...myString].map(x => x > letter ? x : 'l').join('');
}