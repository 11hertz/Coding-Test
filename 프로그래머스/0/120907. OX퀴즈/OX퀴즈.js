function solution(quiz) {
    let answer = [];
    
    const quizScan = (x, oper, y, z) => {
        let res = (oper === '+') ? Number(x) + Number(y) : Number(x) - Number(y);
        return (res === Number(z)) ? 'O' : 'X';
    }
    
    answer = quiz.map(x => {
        const [num1, oper, num2, eq, res] = x.split(' ');
        return quizScan(num1, oper, num2, res);
    })
    
    return answer;
}