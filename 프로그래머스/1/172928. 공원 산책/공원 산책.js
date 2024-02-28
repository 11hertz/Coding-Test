function solution(park, routes) {
    const W = park[0].length;
    const H = park.length;
    const directions = {'N': [-1, 0], 'S': [1, 0], 'W': [0, -1], 'E': [0, 1]};

    let splitRoutes = routes.map(x => x.split(' '));
    
    let pointY = 0;
    let pointX = 0;
    
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[0].length; j++) {
            if(park[i][j] === 'S') {
                pointY = i;
                pointX = j;
            }
        }
    }
    let robotDog = [0 + pointY, 0 + pointX];
    
    for(let i = 0; i < splitRoutes.length; i++) {
        let act = splitRoutes[i];
        const [dir, distance] = act;
        let [NS, WE] = directions[dir];

        for(let i = 0; i < +distance; i++) {
            robotDog[0] += NS;
            robotDog[1] += WE;
            if(robotDog[0] === -1 || robotDog[1] === -1 || robotDog[0] === H || robotDog[1] === W || park[robotDog[0]][robotDog[1]] === 'X') {
                robotDog[0] = pointY;
                robotDog[1] = pointX;
                break;
            }
        }
        pointY = robotDog[0];
        pointX = robotDog[1];
    }
    return robotDog;
}