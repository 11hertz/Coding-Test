function solution(participant, completion) {
    const hash = {};
    
    for(let i = 0; i < participant.length; i++) {
        hash[participant[i]] = (hash[participant[i]]) ? hash[participant[i]] + 1 : 1;
    }
    
    for(let i = 0; i < completion.length; i++) {
        hash[completion[i]] -= (hash[completion[i]]) ? 1 : 0;
    }
   
    for(let [k, v] of Object.entries(hash)) {
        if(v === 1) return k;
    }
}