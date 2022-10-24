/*
* 연속 부분수열 2
*
* N개의 수로 이루어진 수열이 주어집니다.
* 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
* 만약 N=5, M=5이고 수열이 다음과 같다면 1 3 1 2 3
* 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.*/

const solution = (arr, m) => {
    // 전체 경우의 수 (등차수열 합 공식 이용)
    let count = (arr.length * (arr.length + 1)) / 2;

    for (let i = m; i > 0; i--) {
        for (let j = 0; j < arr.length; j++) {
            let sum = 0;
            for (let k = j; k < arr.length; k++) {
                sum += arr[j];
                if (sum > m) {
                    console.log(`${i}일 때 ${sum}`);
                    count--;
                    break;
                }
            }
        }
    }

    // for (let i = 0; i < m; i++) {
    //     let sum = 0;
    //     for (let j = 0; j < arr.length; j++) {
    //         sum += arr[j];
    //         if (sum <= 5) {
    //             console.log(`${i}일 때: ${sum}`);
    //             count++;
    //             sum = 0;
    //         }
    //     }
    // }
    return count;
}

// console.log(solution([1, 3, 1, 2, 3], 5));
console.log(solution([1, 3, 1, 1], 4));
