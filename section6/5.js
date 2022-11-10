/*
* 쇠막대기
*
* 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수수/
 */

const solution = (str) => {
    let result = 0;

    str = str.split('');

    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push('(')
        } else {
            stack.pop();
            if (str[i - 1] === '(') {
                result += stack.length;
            } else {
                result++;
            }
        }
    }
    return result;
}

console.log(solution('()(((()())(())()))(())'));
// console.log(solution('(((()(()()))(())()))(()())'));
