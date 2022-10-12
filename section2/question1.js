/*
* 큰 수 출력하기
*
* N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)
*/

const solution = () => {
    const n = prompt('1부터 100사이의 숫자 하나를 입력해주세요');

    let numberArray = prompt(`${n}개의 숫자를 입력해주세요`).split(' ');
    numberArray = numberArray.map((a) => a = Number(a));

    let answer = `${numberArray[0]} `;

    for (let i = 1; i < n; i++) {
        if (numberArray[i] > numberArray[i - 1]) answer += `${numberArray[i]} `;
    }

    return answer.trim();
}

solution();
