function solution(myString, pat) {
    let len = pat.length;
    let last = myString.lastIndexOf(pat);
    
    return myString.substring(0, len + last);
}