function solution(my_string) {
    var answer = 0;
    
    let arr = my_string.split('').filter(x => isNaN(x) === false);

    arr = arr.map(x => Number(x));
    answer = arr.reduce((x, y) => x + y);
    
    return answer;
}