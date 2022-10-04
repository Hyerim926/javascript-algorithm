/*
* 등수 구하기
*
* N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
*
* 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
* 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
*
* 5
* 87 89 92 100 76
*/

const solution = () => {
    const student = prompt('몇 명의 학생의 등수를 계산할 건지 1부터 100 사이의 숫자를 입력하세요');
    const scoreArray = prompt(`${student}명의 학생의 국어점수를 순서대로 입력하세요`)
        .split(' ')
        .map((one) => Number(one));

    const answer = new Array(5);

    const maxScoreIdx = scoreArray.findIndex((score) => score === Math.max(...scoreArray));
    answer[maxScoreIdx] = 1;

    let count = 0;
    for (let i = 0; i < student; i++) {
        for (let j = 1; j < student; j++) {
            if (scoreArray[i] > scoreArray[j]) {
                count++;
            }
            answer[i] = count + 1;
        }
        count = 0;
    }
    return answer;
}

solution();