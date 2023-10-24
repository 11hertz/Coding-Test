function solution(num_list) {
    let OddSum = num_list.filter((x, i) => i % 2 === 1).reduce((x, y) => x + y);
    let EvenSum = num_list.filter((x, i) => i % 2 === 0).reduce((x, y) => x + y);
    
    return OddSum > EvenSum ? OddSum : EvenSum;
}