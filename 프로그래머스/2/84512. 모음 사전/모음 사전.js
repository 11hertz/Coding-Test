function solution(word) {
    let vowel = 'AEIOU';
    let vowelArr = [];
    
    for(let i = 0; i < 5; i++) {
        vowelArr.push(vowel[i]); 
        for(let j = 0; j < 5; j++) {
            vowelArr.push(vowel[i] + vowel[j]);
            for(let k = 0; k < 5; k++) {
                vowelArr.push(vowel[i] + vowel[j] + vowel[k]);    
                for(let l = 0; l < 5; l++) {
                    vowelArr.push(vowel[i] + vowel[j] + vowel[k] + vowel[l]);    
                    for(let m = 0; m < 5; m++) {
                        vowelArr.push(vowel[i] + vowel[j] + vowel[k] + vowel[l] + vowel[m]);    
                    }
                }
            }
        }
    }

    return vowelArr.indexOf(word) + 1;
}