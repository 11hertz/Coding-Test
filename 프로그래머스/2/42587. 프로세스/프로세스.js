function solution(priorities, location) {
    let answer = 0;
    
    while(priorities.length) {
        let task = priorities[0];
        if(task === Math.max(...priorities)) {
            priorities.shift();
            answer++;
            if(location > 0) location -= 1;
            else break;
        }
        else {
            priorities.push(priorities.shift());
            if(location > 0) location -= 1;
            else location = priorities.length - 1;
        }
        
    }
    
    return answer;
}