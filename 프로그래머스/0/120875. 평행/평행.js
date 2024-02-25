function solution(dots) {
    dots.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    let res1 = (dots[1][0] - dots[0][0]) / (dots[1][1] - dots[0][1]);
    let res2 = (dots[3][0] - dots[2][0]) / (dots[3][1] - dots[2][1]);

    return (res1 === res2) ? 1 : 0;
}