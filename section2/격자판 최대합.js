/*
* 격자판 최대합
*
* N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.
*
* 5
* 10 13 10 12 15
* 12 39 30 23 11
* 11 25 50 53 15
* 19 27 29 37 27
* 19 13 30 13 19*/

const solution = () => {
    const n = prompt('1부터 50 사이의 숫자를 입력하세요');
    const valueArray = [];

    for (let i = 0; i < n; i++) {
        valueArray.push(prompt(`1부터 99 사이의 숫자 ${n}개를 입력하세요`)
            .split(' ')
            .map((num) => Number(num)));
    }

    const sumArray = [];
    valueArray.forEach((arr) => sumArray.push(arr.reduce((sum, currValue) => {
        return sum + currValue;
    }, 0)));

    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += valueArray[j][i];
        }
        sumArray.push(sum);
        sum = 0;
    }

    for (let i = 0; i < n; i++) {
        sum += valueArray[i][i];
    }
    sumArray.push(sum);
    sum = 0;

    for (let i = 0; i < 5; i++) {
        sum += valueArray[i][4 - i];
    }
    sumArray.push(sum);

    return Math.max(...sumArray);
}

solution();