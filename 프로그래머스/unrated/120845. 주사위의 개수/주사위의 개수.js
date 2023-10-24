function solution(box, n) {
    var answer = 0;
    
    let row = Math.floor(box[0] / n);
    let column = Math.floor(box[1] / n);
    let height = Math.floor(box[2] / n);
    
    answer = row * column * height;
    
    return answer;
}