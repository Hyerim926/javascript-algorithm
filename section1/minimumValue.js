/*
* 세 수 중 최솟값
*
* 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요. (정렬 사용 금지) */

const solution = (a, b, c) => {
    // 정렬 사용이 안되니 그냥 대소비교로 진행
    let answer;

    if (a < b) answer = a;
    else answer = b;

    if (answer > c) answer = c;

    return answer;
}

console.log(solution(6, 5, 11));
