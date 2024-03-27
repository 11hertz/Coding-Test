function solution(my_string) {
    return my_string.split('')
        .filter(x => isNaN(x) === false)
        .reduce((acc, curr) => Number(acc) + Number(curr), 0);
}