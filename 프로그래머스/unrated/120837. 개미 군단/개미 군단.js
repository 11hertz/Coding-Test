function solution(hp) {
    var answer = 0;
    
    let gen = Math.floor(hp / 5);
    let sol = Math.floor((hp - (5 * gen)) / 3);
    let rem = Math.floor(hp - (gen * 5) - (sol * 3));
    
    answer = gen + sol + rem;
    return answer;
}