function solution(array, commands) {
    var answer = [];
   
    for(var i = 0; i < commands.length; i++) {
        var a = commands[i][0];
        var b = commands[i][1];
        var c = commands[i][2] - 1;
        var s = array.slice(a - 1, b);
        s.sort(function (a, b) {
            return a - b;
        });
        console.log(s);
        answer.push(s[c]);
    }
    return answer;
}