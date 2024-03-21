function solution(num_list) {
    let even = num_list.filter(x => x % 2 === 0);
    let odd = num_list.filter(x => x % 2 === 1);
    
    return [even.length, odd.length];
}