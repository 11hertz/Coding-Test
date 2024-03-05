// function solution(id_list, report, k) {
//     let answer = [];
    
//     let reportList = {};
//     let reportedList = {};
//     let sReport = [...new Set(report.map(x => x.split(' ')))];

//     for(let [x, y] of sReport) {
//         if(reportList[x]) reportList[x] = [...new Set([...reportList[x], y])];
//         else reportList[x] = [y];
//     }
    
//     console.log(reportList);
//     let reportedListArr = [];
    
//     for(let [k, v] of Object.entries(reportList)) {
//         reportedListArr.push(...v);
//     }
    
//     let reportCountArr = {};
    
//     for(let x of reportedListArr) {
//         reportCountArr[x] = reportCountArr[x] ? reportCountArr[x] + 1 : 1;
//     }
    
//     let bannedId = [];
    
//     for(let [k, v] of Object.entries(reportCountArr)) {
//         if(v > 1) bannedId.push(k);
//     }
    
    
    
//     console.log(bannedId);
//     return answer;
// }

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