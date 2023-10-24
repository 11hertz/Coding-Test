function solution(arr) {
    return arr.reduce((x, y) => x.concat(Array(y).fill(y)), []);
}