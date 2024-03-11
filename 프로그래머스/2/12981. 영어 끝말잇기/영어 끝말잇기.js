function solution(n, words) {
    let answer = [];
    
    let loserIdx = 0;
    
    let mentionedWords = new Map();
    
    mentionedWords.set(words[0], 1);
    
    for(let i = 1; i < words.length; i++) {
        if(!mentionedWords.has(words[i])) {
            mentionedWords.set(words[i], 1);    
        } else {
            answer.push(i % n + 1, parseInt(i / n) + 1);
            break;      
        }
        
        let lastendWord = words[i - 1].slice(-1);      
        if(!words[i].startsWith(lastendWord)) {
            answer.push(i % n + 1, parseInt(i / n) + 1);
            break;
        }
    }
    
    return answer.length > 0 ? answer : [0, 0];
}