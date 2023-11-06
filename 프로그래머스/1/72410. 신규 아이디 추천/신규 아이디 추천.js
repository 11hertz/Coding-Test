function solution(new_id) {
    const regexr = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    const regexr2 = /[".."]+/g;
    const regexr3 = /^\.|\.$/gi;
    
    let answer = new_id.toLowerCase().replace(regexr, '').replace(regexr2, '.').replace(regexr3, '').slice(0,15).replace(regexr3, '');
    
    if(answer.length === 0) {
        answer = 'a';
    }

    let str = answer.charAt(answer.length-1);
    
    while(answer.length < 3) {
        answer += str;
    }
    
    return answer;
}