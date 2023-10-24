function solution(a, b) {
    let num1 = Number(a.toString() + b.toString());
    let num2 = Number(b.toString() + a.toString());
    
    return num1 > num2 ? num1 : num1 === num2 ? num1 : num2;
}