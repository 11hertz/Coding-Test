function solution(dirs) {
    let answer = 0;
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];
    
    let currPoint = [0, 0];
    
    let trail = [];
    
    for(let x of dirs) {
        let [cx, cy] = currPoint;
        if(x === 'U') {
            if(currPoint[0] + dx[0] <= 5) {   
                currPoint[0] += dx[0];
                trail.push([String(cx) + String(cy), String(currPoint[0]) + String(currPoint[1])]);
            }
        } else if(x === 'R') {
            if(currPoint[1] + dy[1] <= 5) {
                currPoint[1] += dy[1];
                trail.push([String(cx) + String(cy), String(currPoint[0]) + String(currPoint[1])]);
            }
        } else if(x === 'D') {
            if(currPoint[0] + dx[2] >= -5) {
                currPoint[0] += dx[2];
                trail.push([String(cx) + String(cy), String(currPoint[0]) + String(currPoint[1])]);
            }
        } else if(x === 'L') {
            if(currPoint[1] + dy[3] >= -5) {
                currPoint[1] += dy[3];
                trail.push([String(cx) + String(cy), String(currPoint[0]) + String(currPoint[1])]);
            }
        }
    }
    
    answer = Array.from(new Set(trail.map(x => x.sort().toString()))).length;
    
    return answer;
}