function solution(numbers) {
    return numbers.map((num) => String(num)).sort((a, b) => (b + a) - (a + b)).join("").replace(/^0+/, "0");
}