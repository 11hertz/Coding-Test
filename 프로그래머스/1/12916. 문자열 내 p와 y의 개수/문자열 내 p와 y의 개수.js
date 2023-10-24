function solution(s){
    var answer = true;

    let result = (s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length)
    ? true : false;
    
    answer = result;
   
    return answer;
}