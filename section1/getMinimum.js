/*
* 최솟값 구하기
*
* 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요. */

const solution = (a, b, c, d, e, f, g) => {
    const array = [a, b, c, d, e, f, g];

    // 안전한 큰 숫자로 변수에 저장하는 방법
    // let min = Number.MAX_SAFE_INTEGER;
    array.sort((a, b) => {
        if (a < b) return -1;
        if (a === b) return 0;
        if (a > b) return 1;
    });

    console.log(array);

    return array[0];
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));

// 강사님 코드
// const solution = (arr) => {
//     let answer, min = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//     }
//     answer = min;
//     return answer;
// }
//     let arr = [5, 7, 1, 3, 2, 9, 11];
//     console.log(solution(arr));
// }

// 내장함수로 구하는 방법
// const solution = (arr) => {
//     let answer = Math.min(...arr);
//     return answer;
// }
//     let arr = [5, 7, 1, 3, 2, 9, 11];
//     console.log(solution(arr));
// }
