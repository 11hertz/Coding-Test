function solution(n, arr1, arr2) {
    const mapArr = Array.from({length: n}, () => Array(n).fill(0));

    const arr1mapArr = arr1.map(x => x.toString(2).padStart(n, '0').split(''));
    const arr2mapArr = arr2.map(x => x.toString(2).padStart(n, '0').split(''));
    
     for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr1mapArr[i][j] === '1' || arr2mapArr[i][j] === '1') mapArr[i][j] = '#';
            else mapArr[i][j] = ' ';
        }
    }

    return mapArr.map(x => x.join(''));
}