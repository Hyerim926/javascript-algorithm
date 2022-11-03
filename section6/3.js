/*
* 크레인을 작동시킨 후 터트려져 사라진 인형의 개수를 return
* */
const solution = (board, moves) => {
    // 인형이 담기는 배열
    let dolls = [];
    // 터진 인형의 수
    let boom = 0;

    for (let i = 0; i < moves.length; i++) {
        // 검색할 row 숫자로 초기화
        let row = moves[i];
        // 각 행을 돎
        for (let j = 0; j < board.length; j++) {
            // board 의 열 인덱스는 row - 1로 잡아줌
            // 0이 아닐 때 인형 컨테이너에 해당 값을 넣어줌
            if (board[j][row - 1] !== 0) {
                dolls.push(board[j][row - 1]);
                // 쓰인 인형자리에는 0으로 바꿔줌
                board[j][row - 1] = 0;
                break;
            }
        }
        // 인형들 검사할 차례
        for (let k = dolls.length; k > 0; k--) {
            // 마지막 요소와 그 전 요소가 같을 때
            if (dolls[k] === dolls[k - 1]) {
                // 배열에서 없애주고
                dolls.splice(k - 1, 2);
                // 터진 인형은 이 조건식을 탈 때마다 두 개씩 터지므로 +2 해줌
                boom = boom + 2;
            }
        }
    }
    return boom;
}

const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
