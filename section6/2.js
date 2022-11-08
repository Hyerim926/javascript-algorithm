/*
* 괄호 문자 제거
*
* 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
*/

//[
//   '(', 'A', '(', 'B', 'C', ')',
//   'D', ')', 'E', 'F', '(', 'G',
//   '(', 'H', ')', '(', 'I', 'J',
//   ')', 'K', ')', 'L', 'M', '(',
//   'N', ')'
// ]

const solution = (str) => {
    let strToArr = str.split('');

    console.log(strToArr);


    let answer = '';

    for (let i = 0; i < strToArr.length; i++) {
        let isString = strToArr[i].match(/[a-zA-Z]/);
        if (isString) {

        }

    }

    return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
