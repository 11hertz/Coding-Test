function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    let answer = 0;
    let cache = [];
    const MISS = 5;
    const HIT = 1;
    let lowerCities = cities.map(x => x.toLowerCase());
    
    for(let city of lowerCities) {
        let idx = cache.indexOf(city);
        
        if(idx === -1) {
            cache.unshift(city);
            if(cache.length > cacheSize) cache.pop();
            answer += MISS;
        } else {
            cache.splice(idx, 1);
            cache.unshift(city);
            answer += HIT;
        }
    }
    
    return answer;
}