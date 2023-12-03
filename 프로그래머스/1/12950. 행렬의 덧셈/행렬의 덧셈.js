function solution(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr1[0].length;
    const answer = Array.from(Array(len1), () => Array(len2).fill(0));
    
    for(let i = 0; i < arr1.length; i += 1) {
        for(let j = 0; j < arr1[0].length; j += 1) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}