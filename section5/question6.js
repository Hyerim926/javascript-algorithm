/*
* 학급 회장(해쉬)
*
* 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
* 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
* 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
* 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.*/

// 시간복잡도가 n^3 일 거 같아서 좋은 코드는 아닌 거 같다
const solution = (arr) => {
    const candidates = Array.from(new Set(arr));

    let maxVotes = 0;
    let winner;

    for (let i = 0; i < candidates.length; i++) {
        if (arr.filter((one) => one === candidates[i]).length > maxVotes) {
            maxVotes = arr.filter((one) => one === candidates[i]).length;
            winner = candidates[i];
        }
    }

    return winner;
}

console.log(solution(['B', 'A', 'C', 'B', 'A', 'C', 'C', 'A', 'C', 'C', 'B', 'D', 'E', 'D', 'E']));
