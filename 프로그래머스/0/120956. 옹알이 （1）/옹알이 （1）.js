function solution(babbling) {
    return babbling.map(x => x.replace(/aya|ye|woo|ma/g, '')).filter(x => x === '').length;
}