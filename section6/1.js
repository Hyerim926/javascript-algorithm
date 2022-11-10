/*
* 올바른 괄호
*
* 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
* (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.*/

/*
* 괄호가 나오면 대부분 스택 문제
* */


const solution = (str) => {
    const strToArr = str.split('');
    let answer = 'NO';

    /* 조건1 : 첫번째는 ( 마지막은 )로 끝나야 함
       조건2 : 문자열의 길이는 짝수여야함
       조건3 : (의 개수와 )의 개수가 동일해야 함
     */
    if (strToArr[0] === '(' && strToArr[strToArr.length - 1] === ')' && strToArr.length % 2 === 0) {
        let left, right = 0;
        strToArr.forEach((one) => {
            if (one === '(') left++;
            right++;
        })

        if (left === right) answer = 'YES';
    }
    return answer;
}

console.log(solution('(()(()))(()'));
