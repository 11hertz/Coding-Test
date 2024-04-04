function solution(hp) {
    let gen = Math.floor(hp / 5);
    let sol = Math.floor((hp - (5 * gen)) / 3);
    let rem = Math.floor(hp - (gen * 5) - (sol * 3));

    return gen + sol + rem;;
}