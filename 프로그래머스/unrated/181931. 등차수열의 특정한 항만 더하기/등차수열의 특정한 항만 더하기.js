function solution(a, d, included) {
    return included.reduce((acc, v, i) => {
        return v ? acc + (a + d * i) : acc }, 0)
}