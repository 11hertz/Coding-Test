function solution(picture, k) {
    let answer = [];
    
    for(let x = 0; x < picture.length; x++) {
        let temp = '';
        for(let y = 0; y < picture[x].length; y++) {
            temp += picture[x][y].repeat(k);
        }
        for(let z = 0; z < k; z++) {
            answer.push(temp);
        }
    }
    
    return answer;
}