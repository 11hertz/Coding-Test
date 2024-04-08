function solution(my_string) {
    return my_string.split('')
        .filter(x => isNaN(x) === false)
        .sort((a, b) => a - b)
        .map(x => parseInt(x));;
}