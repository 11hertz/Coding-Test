function solution(name, yearning, photo) {
    let answer = [];
    
    photo.map(x => {
        let sum = 0;
        x.forEach(n => {
            let idx = 0;
            if(name.includes(n)) {
                idx = name.indexOf(n);
                sum += yearning[idx];
            }
        })
        answer.push(sum);
    })
    
    
    return answer;
}