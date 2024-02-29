function solution(N, A, B)
{
    let answer = 0;
    for(let i = 1; i <= 20; i++) {
        A = (A % 2 === 0) ? (A / 2) : parseInt(A / 2) + 1;
        B = (B % 2 === 0) ? (B / 2) : parseInt(B / 2) + 1;

        if(A === B) {
            answer = i;
            break;
        }
    }
    return answer;
}