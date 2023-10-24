function solution(n_str) {
    let resArr = [...n_str];
    let startIdx = resArr.findIndex(x => x > 0);
    return resArr.slice(startIdx).join('');
}