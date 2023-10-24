function solution(my_string, indices) {
    let answer = '';
    let txt = [...my_string];
    let len = txt.length;
    
    indices.sort((x, y) => x - y);

    for(let i = 0; i < len; i++) {
        if(!indices.includes(i)) answer += txt[i]; 
    }
    
    return answer;
}