function solution(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array(curr).fill(curr)), []);
}