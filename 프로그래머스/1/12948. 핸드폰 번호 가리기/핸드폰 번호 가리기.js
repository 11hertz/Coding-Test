function solution(phone_number) {
    let stars = [...phone_number.slice(0, -4)].map(x => "*").join('');
    let numbers = phone_number.slice(-4);

    return stars + numbers;  ;
}