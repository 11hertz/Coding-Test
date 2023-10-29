function solution(id_pw, db) {
    const [ id, pw ] = id_pw;
    
    for(let [d_id, d_pw] of db) {
        if(id === d_id && pw === d_pw) return "login";
        if(id === d_id && pw !== d_pw) return "wrong pw";
    }
    return "fail";
}