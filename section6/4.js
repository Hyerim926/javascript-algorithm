/*
* 후위식 연산
*
* 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
* 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
*/

/*
* 후위식 연산이란?
* 곱하기와 나누기는 다른 연산보다 우선시 되어야하고 괄호가 있는 경우에는 모든 연산의 최우선*/
const solution = (str) => {
    str = str.split('').map((one) => Number(one) || one.toString());

    let result = 0;

    while (str.length > 0) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '+') {
                if (str[i - 2] && typeof str[i - 2] === "number") {
                    result = str[i - 2] + str[i - 1];
                    str.splice(i - 2, 3);
                } else {
                    result += str[i - 1];
                    str.splice(i - 1, 2);
                }
            } else if (str[i] === '*') {
                if (str[i - 2] && typeof str[i - 2] === "number") {
                    result = str[i - 2] * str[i - 1];
                    str.splice(i - 2, 3);
                } else {
                    result *= str[i - 1];
                    str.splice(i - 1, 2);
                }
            } else if (str[i] === '-') {
                if (str[i - 2] && typeof str[i - 2] === "number") {
                    result = str[i - 2] - str[i - 1];
                    str.splice(i - 2, 3);
                } else {
                    result -= str[i - 1];
                    str.splice(i - 1, 2);
                }
            } else if (str[i] === '/') {
                if (str[i - 2] && typeof str[i - 2] === "number") {
                    result = str[i - 2] / str[i - 1];
                    str.splice(i - 2, 3);
                } else {
                    result /= str[i - 1];
                    str.splice(i - 1, 2);
                }
            }
        }
    }
    return result;
};

console.log(solution('352+*9-'));
console.log(solution('352*+9-'));
console.log(solution('352-*9+'));
