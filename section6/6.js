/*
* 공주 구하기
*
* 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N 번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.
* 그리고 1번 왕자부터 시 계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다.
* 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
* 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
* N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.*/

const solution = (n, k) => {
    let princeByHeight = [];
    for (let i = 0; i < n; i++) {
        princeByHeight.push(i + 1);
    }

    let i = 0;
    while (princeByHeight.length !== 1) {
        for (let i = 0; i < princeByHeight.length; i++) {
            if (i + 1 === k) {
                princeByHeight.splice(i, 1); // k에 해당하는 요소 지워주고
                let j = 0;
                while (j < k - 1) { // k에 해당하는 요소 이전의 값들을 배열의 마지막 요소 뒤로 이동시킴
                    princeByHeight.splice(princeByHeight.length, 1, princeByHeight[0]);
                    princeByHeight.splice(0, 1);
                    j++;
                }
                break;
            } else if (princeByHeight.length === 2) { // 최후 2인이 남았을 때
                if (k % 2 === 1) { // k가 홀수인 경우에는 0번째 사람이 k를 외치게 됨
                    princeByHeight.splice(0, 1);
                } else { // k가 짝수인 경우에는 1번째 사람이 k를 외치게 됨
                    princeByHeight.splice(1, 1);
                }
            }
        }
        i++;
    }

    return princeByHeight[0];
}

console.log(solution(8, 3));
console.log(solution(5, 2));
console.log(solution(4, 1));
