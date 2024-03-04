function solution(skill, skill_trees) {
    let answer = 0;
    
    let splitSkill = skill.split('');
    let splitST = skill_trees.map(x => x.split(''));

    let arr = splitST.map(x => x.filter(e => splitSkill.includes(e)));
        
    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        for(let j = 0; j < splitSkill.length; j++) {
            console.log(arr[i], splitSkill[j]);
            if(arr[i][j] === splitSkill[j]) count++;   
        }
        if(count === arr[i].length) answer++;
    }
    
    return answer;
}