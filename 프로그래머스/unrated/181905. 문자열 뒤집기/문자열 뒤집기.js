function solution(my_string, s, e) {
    let txt1 = my_string.slice(0, s);
    let txt2 = my_string.slice(e + 1);
    
    return txt1 + [...my_string].slice(s, e + 1).reverse().join('') + txt2;
}