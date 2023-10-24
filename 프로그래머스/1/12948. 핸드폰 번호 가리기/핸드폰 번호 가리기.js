function solution(phone_number) {
    var answer = '';
    
    let stars = phone_number.split("").slice(0, -4).map(x => "*").join('');
    let numbers = phone_number.split("").slice(-4).join('');
    
    answer = stars + numbers;  
    
    return answer;
}