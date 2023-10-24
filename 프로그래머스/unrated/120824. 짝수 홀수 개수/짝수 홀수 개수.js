function solution(num_list) {
    var answer = [];
    
    let even = num_list.filter(x => x % 2 === 0);
    let odd = num_list.filter(x => x % 2 === 1);
    
    answer.push(even.length);
    answer.push(odd.length);
    
    return answer;
}