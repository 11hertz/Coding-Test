function solution(nums) {
    let answer = 0;
    const pocketSet = [...new Set(nums)];
    answer = (pocketSet.length > (nums.length / 2)) ? nums.length / 2 : pocketSet.length;
    
    return answer;
}