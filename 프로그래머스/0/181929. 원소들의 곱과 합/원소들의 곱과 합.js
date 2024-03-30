function solution(num_list) { 
    const allMulti = num_list.reduce((x, y) => x * y);
    const sumSquare = num_list.reduce((x, y) => x + y, 0) ** 2;
    return (allMulti < sumSquare) ? 1 : 0;
}