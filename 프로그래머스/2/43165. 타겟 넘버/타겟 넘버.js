function solution(numbers, target) {
    let answer = 0;
    let len = numbers.length;
    
    const DFS = (level, sum) => {
        if(level === len) {
            if(sum === target) answer += 1;    
        } else {
            DFS(level + 1, sum + numbers[level]);
            DFS(level + 1, sum - numbers[level]);
        }
    }
    
    DFS(0, 0);
    
    return answer;
}