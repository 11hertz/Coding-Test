function solution(myStr) { 
    let answer = myStr.split(/[a, b, c]/).filter(x => x.length >= 1);
    return (answer.length !== 0) ? answer : ['EMPTY'];
}