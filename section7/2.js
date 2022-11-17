/*
* 버블 정렬
*
* N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
* 정렬하는 방법은 버블정렬입니다.*/

const solution = (n, arr) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            let temp = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(6, arr));

