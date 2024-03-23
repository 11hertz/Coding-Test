function solution(s1, s2) {
    return s1.filter(x => s2.indexOf(x) >= 0).length;
}