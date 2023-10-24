function solution(order) {
    let answer = 0;
    
    answer = order.reduce((s, v) => {
        let isLatte = v.includes('latte') ? true : false;
        if(isLatte) {
            return s + 5000;
        } else {
            return s + 4500;
        }
    }, 0);
    
    return answer;
}