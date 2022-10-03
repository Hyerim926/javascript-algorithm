/*
* 가위 바위 보
*
* A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다.
* 비길 경우에는 D를 출력합니다. 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
*
* 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
*
* 입력예제
* 5
* 2 3 3 1 3
* 1 1 2 2 3
*/

const findResult = (a, b) => {
    switch (a) {
        case '1':
            if (b === '3') {
                return 'A';
            } else {
                return 'B';
            }
        case'2':
            if (b === '1') {
                return 'A';
            } else {
                return 'B';
            }
        case '3':
            if (b === '2') {
                return 'A';
            } else {
                return 'B';
            }
    }
}

const solution = () => {
    const n = prompt('몇 번의 가위바위보를 할 것인지 1부터 100사이의 숫자를 입력하세요');

    const a = prompt(`A의 ${n}번의 가위바위보를 정보를 입력하세요`).split(' ');
    const b = prompt(`B의 ${n}번의 가위바위보를 정보를 입력하세요`).split(' ');

    /*
    * 이기는 경우
    * 가위(1) - 보(3)
    * 바위(2) - 가위(1)
    * 보(3) - 바위(2)
    * */
    let answer = [];
    for (let i = 0; i < n; i++) {
        if (a[i] === b[i]) {
            answer += 'D';
        } else {
            answer += findResult(a[i], b[i]);
        }
        answer += '\n';
    }
    return answer;
}

solution();