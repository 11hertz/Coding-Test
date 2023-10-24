function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((x, y) => x + y, 0) : num_list.reduce((x, y) => x * y);
}