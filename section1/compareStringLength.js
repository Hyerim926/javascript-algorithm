/*
* N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.*/

const solution = () => {
    const count = Number(prompt('N을 입력하세요.'));
    const stringArr = [];
    for (let i = 0; i < count; i++) {
        stringArr.push(prompt('문자열을 입력하세요.'));
    }

    const lengthArr = [];

    stringArr.forEach((string) => {
        lengthArr.push(string.length);
    })

    return stringArr[lengthArr.indexOf(Math.max(...lengthArr))];
}

solution();