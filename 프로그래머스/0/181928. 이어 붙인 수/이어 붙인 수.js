function solution(num_list) {    
    let oddSum = num_list.filter(x => x % 2).reduce((x, y) => x + y, '');
    let evenSum = num_list.filter(x => !(x % 2)).reduce((x, y) => x + y, '')
    
    return Number(oddSum) + Number(evenSum);
}