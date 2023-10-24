function solution(n, control) {
   return [...control].reduce((n, val) => 
                              (val === 'w') ? n += 1 : 
                              (val === 's') ? n -= 1 :
                              (val === 'd') ? n += 10 :
                              n -= 10, n);
}