function solution(my_string, overwrite_string, s) {
    const txt1 = my_string.slice(0, s);
    const txt2 = my_string.slice((s+overwrite_string.length), my_string.length);    
    return txt1 + overwrite_string + txt2;
}