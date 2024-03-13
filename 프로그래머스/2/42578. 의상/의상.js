function solution(clothes) {
    let answer = 1;
    
    let wardrobe = new Map();
    
    for(let [name, category] of clothes) {
        if(wardrobe.has(category)) {
            wardrobe.set(category, wardrobe.get(category) + 1);
        } else {
            wardrobe.set(category, 1);
        }
    }
    
    for(let v of wardrobe.values()) {
        answer *= (v + 1);
    }
    
    answer -= 1;
    
    return answer;
}