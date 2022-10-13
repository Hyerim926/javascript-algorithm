/*
* 가장 짧은 문자 거리
*
* 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
*/

// 'e'가 몇 번째 인덱스에 있는지 배열에 넣는 함수
const getIndexOfLetter = (s, t) => {
    const indexArray = [];
    let pos = s.indexOf(t);

    while (pos !== -1) {
        indexArray.push(pos);
        pos = s.indexOf('e', pos + 1);
    }

    return indexArray;
}

const solution = (s, t) => {
    let answer = '';

    const indexArray = getIndexOfLetter(s, t);

    for (let i = 0; i < s.length; i++) {
        let distanceArray = [];
        for (let j = 0; j < indexArray.length; j++) {
            // 현재 인덱스와 'e'가 있는 인덱스의 차이 구하기
            distanceArray.push(Math.abs(i - indexArray[j]));
        }
        // 가장 작은 값 넣기
        answer += Math.min(...distanceArray);
    }

    return answer;
}

console.log(solution('teachermode', 'e'));
