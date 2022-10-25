/*
* 두 배열 합치기
*
* 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요. */

// two pointers 알고리즘으로 o(n + m)의 시간복잡도를 가지도록 푸는 것이 좋다
const solution = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b); // sort 방법은 시간복잡도가 nlogn이 된다

}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
