/*
* N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.*/

const solution = () => {
    const count = Number(prompt('N을 입력하세요.'));
    const stringArr = [];
    for (let i = 0; i < count; i++) {
        stringArr.push(prompt('문자열을 입력하세요.'));
    }

    return Array.from(new Set(stringArr)).join('');
}

solution();