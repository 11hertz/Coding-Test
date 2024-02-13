function solution(dots) {
    let answer = 0;
    
    let newDots = dots.sort((a, b) => a[0] - b[0]);
    console.log(newDots);
    
    let x = newDots[2][0] - newDots[0][0];
    let y = newDots[1][1] - newDots[0][1];
    
    console.log(x, y);
    return x * y;
}