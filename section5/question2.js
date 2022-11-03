/*
* 공통원소 구하기
*
* A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.*/

const solution = (arr1, arr2) => {
    return arr1.filter((one) => arr2.includes(one)).sort((a, b) => a - b);
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));