function solution(new_id) {
    var answer = '';
    
    var first = new_id.toLowerCase();
   
    var regexr = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    
    var second = first.replace(regexr, '');
    
    console.log(second);
    
    var regexr2 = /[".."]+/g;
    
    var third = second.replace(regexr2, '.');
    console.log(third);
    
    var regexr3 = /^\.|\.$/gi;
    
    var fourth = third.replace(regexr3, '');
    
    console.log(fourth);
    
    if(fourth.length === 0) {
        fourth = 'a';
    }
    console.log(fourth);
    
    var fifth = fourth;
    
    console.log(fifth);
    
    var str = fifth.charAt(fifth.length-1);
    
    while(fifth.length < 3) {
        fifth += str;
    }
    
    console.log(fifth);
    
    var sixth = fifth.slice(0,15);
    console.log(sixth);
    
    var seventh = sixth.replace(regexr3, '');
    console.log(seventh);
    
    answer = seventh;
    
    return answer;
}