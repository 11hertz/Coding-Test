function solution(a, b) {
    const WEEKS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const date = new Date(`2016-${a}-${b}`).getDay();
    
    return WEEKS[date];
}