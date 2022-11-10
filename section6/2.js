/*
* 괄호 문자 제거
*
* 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
*/

const solution = (str) => {
    let strToArr = str.split('');

    const stack = [];

    for (let i = 0; i < strToArr.length; i++) {
        if (strToArr[i] !== ')') {
            stack.push(strToArr[i]);
        } else {
            stack.splice(stack.lastIndexOf('('));
        }
    }

    return stack.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
