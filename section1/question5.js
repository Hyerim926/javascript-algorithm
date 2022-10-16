/*
* 최솟값 구하기
*
* 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요. */

const solution = (a, b, c, d, e, f, g) => {
    // 7개의 수를 배열에 저장한 뒤, 오름차순을 값을 정렬하고 가장 작은 값을 반환함
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