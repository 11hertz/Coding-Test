function solution(num_list) {
    const last = num_list.length - 1;
    const res = num_list[last] > num_list[last - 1] ? num_list[last] - num_list[last - 1] : num_list[last] * 2;
    
    return [...num_list, res];
}