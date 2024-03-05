function solution(id_list, report, k) {
    let answer = Array(id_list.length).fill(0);
    
    let s = [...new Set(report)].map(x => x.split(' '));
    
    let reportObj = {};
    let reportUserList = [];
    
    for(let i = 0; i < s.length; i++) {
        reportObj[s[i][1]] = reportObj[s[i][1]] ? reportObj[s[i][1]] + 1 : 1;
    }
    
    let reportedNames = [];
    
    for(let [name, num] of Object.entries(reportObj)) {
        if(num >= k) reportedNames.push(name);
    }
    
    console.log(s);
    let temp = [];
    
    for(let [name, rName] of s) {
        if(reportedNames.includes(rName)) {
            temp.push(name);
        }
    }
    console.log(temp);
    
    for(let i = 0; i < id_list.length; i++) {
        for(let j = 0; j < temp.length; j++) {
            if(id_list[i] === temp[j]) answer[i] += 1;  
        }
    }

    return answer;
}