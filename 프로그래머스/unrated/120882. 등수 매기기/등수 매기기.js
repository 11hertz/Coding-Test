function solution(score) {
    let answer = Array.from({ length: score.length }, (_, i) => 1);
    
    const avgArr = score.map(([x, y]) => (x + y) / 2);
    
    for(let i = 0; i < avgArr.length; i++) {
        for(let j = i + 1; j < avgArr.length; j++) {
            if(avgArr[i] > avgArr[j]) {
                answer[j] += 1;
            } else if(avgArr[i] < avgArr[j]) {
                answer[i] += 1;
            }
        }
    }
    
    return answer;
}