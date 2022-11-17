/*
* 선택 정렬
*
* N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 선택정렬입니다.
* */

const solution = (n, arr) => {
    let indexMin;
    let temp;
    for (let i = 0; i < n; i++) {
        indexMin = i;
        console.log(`${indexMin}회전`);
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[indexMin]) {
                console.log(j);
                indexMin = j;
            }
        }
        temp = arr[indexMin];
        arr[indexMin] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(6, arr));
