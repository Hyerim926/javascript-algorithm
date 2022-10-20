/*
* 멘토링
*
* 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
* 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
* 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
* 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
* M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
*/

const solution = (array) => {
    let answer = 0;
    let m = array.length;
    let n = array[0].length;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = 0, pj = 0;
                for (let s = 0; s < n; s++) {
                    if (array[k][s] === i) pi = s;
                    if (array[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === m) answer++;
        }
    }
    return answer;
}

// 배열의 숫자가 등수이고 인덱스가 학생 아이디인줄 알고 잘못 풀었다.. 그래서 답도 맞지 않았던 것이었다.
const notSolution = (array) => {
    let answer = 0;
    for (let i = 0; i < array[0].length; i++) {
        console.log('------------------');
        console.log(`${i + 1} 번째 학생`);
        for (let j = 0; j < array.length; j++) {
            let count = 0;
            let temp = 0;
            console.log(`${j + 1} 번째 학생과 비교`)
            for (let k = 0; k < array.length; k++) {
                console.log(`${k + 1} 번째 시험의 결과는?`);
                let a = array[k][i]
                let b = array[k][j]
                if (a < b) {
                    temp++;
                    console.log('이겼습니다');
                }
                if (temp > 2) answer++;
                console.log(a, b, temp, count);
            }
        }
    }
    return answer;
}

console.log(solution([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]));
console.log(notSolution([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]));