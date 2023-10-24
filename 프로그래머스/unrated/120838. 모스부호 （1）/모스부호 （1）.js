function solution(letter) {
    var answer = '';
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
                 ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
                 ".--","-..-","-.--","--.."];
    
    let arr = letter.split(' ').map(x => morse.indexOf(x));
   
    answer = arr.map(x => String.fromCharCode(97 + x)).join('');
    
    
    return answer;
}