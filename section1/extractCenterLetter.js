/*
* 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.*/

const solution = (string) => {
    let answer;

    const start = Math.ceil(string.length / 2);
    console.log(start)
    answer = string.length % 2 === 0 ? string.substring(start - 1, start + 1) : string.charAt(start - 1);

    return answer;
}

solution('study');
solution('good');