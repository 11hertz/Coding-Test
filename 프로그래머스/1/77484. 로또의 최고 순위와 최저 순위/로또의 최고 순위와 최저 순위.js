function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let zeros = lottos.filter(x => x === 0).length;
    
    let min = lottos.filter(x => win_nums.includes(x)).length;
    let max = min + zeros;

    return [rank[max], rank[min]];
}