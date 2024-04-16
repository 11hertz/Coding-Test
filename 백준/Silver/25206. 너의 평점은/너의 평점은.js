const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(x => x.split(' ').map(x => x.replace('\r', '')));

const scoreArr = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.0];
let gradeArr = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'];

let sumScore = 0;
let subjectCount = 0;
for (let i = 0; i < input.length; i++) {
  let [subject, sHour, grade] = input[i];
  let idx = gradeArr.indexOf(grade);

  if (idx !== -1) {
    sumScore += scoreArr[idx] * sHour;
    subjectCount += +sHour;
  }
}

console.log(sumScore / subjectCount);