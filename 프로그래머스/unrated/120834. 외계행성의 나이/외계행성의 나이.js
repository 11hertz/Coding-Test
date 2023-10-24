function solution(age) {
    var answer = '';
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    let arr2 = age.toString().split('').map(x => parseInt(x));
    
    for(let i = 0; i < arr2.length; i++) {
        answer += arr[arr2[i]];
    }
    
    return answer;
}