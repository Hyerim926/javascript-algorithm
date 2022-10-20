/*
* 자릿수의 합
*
* N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
* 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.*/

// 각 자리수의 숫자의 합을 구하는 함수
const getSum = (num) => {
    return num.toString()
        .split('')
        .map((one) => Number(one))
        .reduce((pre, cur) => pre + cur);
};

const solution = (array) => {
    // 자연수를 가지고 합하는 것이니 초기화를 0으로 함
    let max = 0;

    for (let i = 0; i < array.length; i++) {
        let curSum = getSum(array[i]);

        if (curSum >= getSum(max)) {
            max = array[i];
            if (array[i] > max) max = array[i];
        }
    }

    return Number(max);
};

console.log(solution([235, 460, 603, 40, 521, 137, 1235]));