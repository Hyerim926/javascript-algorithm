/*
* 홀수
*
* 7개의 자연수가 주어질 떄, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
* 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
* 77 + 41 + 53 + 85 = 256 이 되고, 41 < 53 < 77 < 85이므로 홀수들 중 최소값은 41이 된다. */

const solution = (a, b, c, d, e, f, g) => {
    // 홀수만 있는 배열을 만들어 sum을 구하고 배열을 정렬하여 0번째 값을 구함
    let sum = 0;

    const valueArray = [a, b, c, d, e, f, g];
    const oddArray = [];

    // 이 부분을 그냥 arr.filter()로 만들어도 되었을 거 같다
    valueArray.forEach((a) => {
        if (a % 2 === 1) {
            sum += a
            oddArray.push(a);
        }
    })

    console.log(sum);

    oddArray.sort((a, b) => {
        if (a < b) return -1;
        if (a === b) return 0;
        if (a > b) return 1;
    })

    console.log(oddArray[0]);
}

solution(12, 77, 38, 41, 53, 92, 85);

// 강사님 코드
const anotherSolution = (arr) => {
    let answer = [];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x;
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(anotherSolution(arr));

