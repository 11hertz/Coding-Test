function solution(number) {
    return ([...number].reduce((sum, val) => sum + Number(val), 0)) % 9;
}