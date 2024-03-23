function solution(sides) {
    let maxSize = Math.max(...sides);
    let sum = sides.reduce((acc, curr) => acc + curr, 0);

    return ((sum - maxSize) > maxSize) ? 1 : 2;;
}