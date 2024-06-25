function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if(stack.at(-4) === 1 && stack.at(-3) === 2 && stack.at(-2) === 3 && stack.at(-1) === 1) {
            stack.splice(-4);
            answer++;
        }
    }
   
    
    return answer;
}