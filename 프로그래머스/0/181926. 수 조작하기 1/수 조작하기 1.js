function solution(n, control) {
   return [...control].reduce((acc, curr) => 
                              (curr === 'w') ? acc += 1 : 
                              (curr === 's') ? acc -= 1 :
                              (curr === 'd') ? acc += 10 :
                              acc -= 10, n);
}