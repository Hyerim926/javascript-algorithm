/*
* 쇠막대기
*
* 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수수/
 */

const solution = (str) => {
    const laser =
        {
            length: str.split('()').length - 1,
            indexRange: [],
        };

    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' && str[i + 1] === ')') {
            laser.indexRange.push([i, i + 1]);
        }
    }

    // let stick = 0;
    // while (stick <= )
    const indexArray = []
    str.forEach()

    for (let i = 0; i < str.length; i++) {

    }

    // console.log(laser);

    let result;

    return result;
}

console.log(solution('()(((()())(())()))(())'));
// console.log(solution('(((()(()()))(())()))(()())'));
