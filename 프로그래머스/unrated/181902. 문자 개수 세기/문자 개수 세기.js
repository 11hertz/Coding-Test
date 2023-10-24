function solution(my_string) {
    let arr = Array.from({length: 52}, x => 0);
    
    let strArr = [...my_string];
    
    strArr.forEach(x => {
        let char = x.charCodeAt();
        if(x === x.toUpperCase()) {
            arr[char - 65] += 1;
        } else {
            arr[char - 97 + 26] += 1;
        }
    });
    
    return arr;
}