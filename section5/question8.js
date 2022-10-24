/*
* 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
*
* S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
* 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.*/

const solution = (s, t) => {
    const availableStr = [];

    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < t.length; j++)
            for (let k = 0; k < t.length; k++) {
                if (t[i] !== t[j] && t[j] !== t[k] && t[i] !== t[k]) {
                    availableStr.push(t[i] + t[j] + t[k]);
                }
            }
    }

    let count = 0;
    for (let i = 0; i < availableStr.length; i++) {
        if (s.match(new RegExp(availableStr[i], 'g'))) {
            count++;
        }
    }
    return count;
}


console.log(solution('bacaAacba', 'abc'));
