function solution(myString) {
    let arr = myString.split('x').sort();
    return arr.filter(x => x.length > 0);
}