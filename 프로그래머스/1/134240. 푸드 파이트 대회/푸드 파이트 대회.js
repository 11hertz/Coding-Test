function solution(food) {
    const foodNumArr = food.map(x => {
        if(x === 0) return 1;
        return parseInt(x / 2);
    })
    
    let str = '';
    for(let i = 1; i < foodNumArr.length; i++) {
        str += String(i).repeat(foodNumArr[i]);
    }
    
    let reverseStr = [...str].reverse().join('');
    return str + '0' + reverseStr;
}