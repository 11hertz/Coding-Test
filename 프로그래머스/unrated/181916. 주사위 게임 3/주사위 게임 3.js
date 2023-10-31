function solution(a, b, c, d) {
    let answer = 0;
    
    const arr = [a, b, c, d].sort();    
 
    console.log(arr);
    
    if(arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]) {
        answer = 1111 * arr[0];   
    } else if(arr[0] === arr[1] && arr[1] === arr[2]) {
        answer = (10 * arr[0] + arr[3]) ** 2;    
    } else if(arr[1] === arr[2] && arr[2] === arr[3]) {
        answer = (10 * arr[1] + arr[0]) ** 2;
    } else if((arr[0] === arr[1]) && (arr[2] === arr[3])) {
        answer = (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);        
    } else if((arr[0] === arr[1]) && arr[1] !== arr[2]) {
        answer = arr[2] * arr[3];
    } else if(arr[1] === arr[2]) {
        answer = arr[0] * arr[3];
    } else if(arr[2] === arr[3]) {
        answer = arr[0] * arr[1];
    } else if(arr[0] !== arr[1] !== arr[2] !== arr[3]) {
        answer = Math.min(a, b, c, d); 
    }
    
    return answer;
}