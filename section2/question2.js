/*
* 보이는 학생
*
* 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때,
* 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
*/

const solution = () => {
    const n = prompt('몇 명의 학생을 세울 건지 1부터 1000사이의 숫자를 입력하세요');

    const studentArray = prompt(`${n}명의 학생의 키를 입력해주세요`).split(' ');

    // 맨 앞에 있는 사람은 무조건 보임
    let answer = 1;

    let compared = studentArray[0];
    for (let i = 0; i < studentArray.length; i++) {
        if (compared < studentArray[i + 1]) {
            answer += 1;
            compared = studentArray[i + 1];
        }
    }

    return answer;
}

solution();