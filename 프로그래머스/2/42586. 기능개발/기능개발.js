function solution(progresses, speeds) {
    let answer = [];
    
    while(progresses.length) {
        let count = 0;
        for(let i = 0; i < progresses.length; i++) {
            if(progresses[i] < 100) progresses[i] += speeds[i];
        }
        
        if(progresses[0] >= 100) {
            while(progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                count++;
            }
            answer.push(count);
        }
    }
    
    return answer;
}