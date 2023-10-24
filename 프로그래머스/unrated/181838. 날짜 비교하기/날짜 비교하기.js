function solution(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    
    return d1 - d2 > 0 ? 0 : d1 - d2 === 0 ? 0 : 1;
}