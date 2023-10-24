function solution(num_str) {
    return [...num_str].reduce((sum, val) => sum + Number(val), 0);
}