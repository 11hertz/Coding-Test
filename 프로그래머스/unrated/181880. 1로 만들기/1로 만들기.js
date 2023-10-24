function solution(num_list) {
    let count = 0;
    
    num_list.forEach(x => {
        while(x !== 1) { 
            x = !(x % 2) ? x / 2 : (x - 1) / 2;
            count += 1;
        }
    });
        
    return count;
}