function solution(chicken) {
    let answer = 0;
    let coupon = chicken;
    let count = 0
    while(count < String(chicken).length) {
        answer += parseInt(coupon / 10);
        let res = coupon % 10;
        coupon = parseInt(coupon / 10) + res;
        count++;
    }
    
    return answer;
}