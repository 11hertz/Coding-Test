function solution(rank, attendance) {
    let arr = rank.filter((x, i) => attendance[i] === true).sort((a, b) => a - b);
  
    let a = rank.indexOf(arr[0]);
    let b = rank.indexOf(arr[1]);
    let c = rank.indexOf(arr[2]);
    
    return a * 10000 + b * 100 + c;
}