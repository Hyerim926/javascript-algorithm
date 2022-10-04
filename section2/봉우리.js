/*
* 봉우리
*
* 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.
* 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
* 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
* 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
*
* 5
* 5 3 7 2 3
* 3 7 1 6 1
* 7 2 5 3 4
* 4 3 6 4 1
* 8 7 3 5 2*/

const solution = () => {
    const n = Number(prompt('1부터 50 사이의 숫자를 입력하세요'));
    const valueArray = [];

    valueArray.push([0, 0, 0, 0, 0]);
    for (let i = 0; i < n; i++) {
        valueArray.push(prompt(`1부터 99 사이의 숫자 ${n}개를 입력하세요`)
            .split(' ')
            .map((num) => Number(num)));
    }
    valueArray.push([0, 0, 0, 0, 0]);

    valueArray.forEach((arr) => {
        arr.push(0);
        arr.unshift(0);
    });

    console.log(valueArray);

    let answer = 0;

    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (valueArray[i][j] > valueArray[i - 1][j]
                && valueArray[i][j] > valueArray[i][j - 1]
                && valueArray[i][j] > valueArray [i + 1][j]
                && valueArray[i][j] > valueArray [i][j + 1]) answer++;
        }
    }
    return answer;
}

solution();