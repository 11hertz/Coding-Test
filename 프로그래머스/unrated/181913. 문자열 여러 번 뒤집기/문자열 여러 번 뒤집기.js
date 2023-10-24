function solution(my_string, queries) {
    let len = queries.length;
    let answer = [...my_string].join('');
    
    for(let i = 0; i < len; i++) {
        let [a, b] = queries[i];
        let txt1 = answer.slice(0, a);
        let txt2 = [...answer.slice(a, b + 1)].reverse().join('');
        let txt3 = answer.slice(b + 1);

        answer = txt1 + txt2 + txt3;
    }
  
    return answer;
}