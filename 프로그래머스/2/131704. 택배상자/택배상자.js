function solution(order) {
    let answer = 0;
    let stack = [];

    let count = 0;
    for(let i = 1; i <= order.length; i++) {
        stack.push(i);
        
        while(stack.length > 0 && stack.at(-1) === order[count]) {
            stack.pop();
            count += 1;
            answer++;
        }
    }
    
    return answer;
}