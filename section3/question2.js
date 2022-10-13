/*
* 유효한 팰린드롬
*
* 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
* 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
* 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.*/

const solution = (string) => {
    const regExp = /[a-z]/;

    // 대소문자 구분하지 않는다 했으니 모두 소문자로 바꿈
    string = string.toLowerCase();
    string = string.split('');

    // 영문인 문자만 필터링
    string = string.filter((letter) => regExp.test(letter) === true);

    // 같은 단어가 짝지어서 있다면 배열 길이의 반으로 나눈 곳의 인덱스가 딱 반이 될 것임
    const first = string.slice(0, string.length / 2).join('');
    const second = string.slice(string.length / 2, string.length).reverse().join('');

    return first === second ? 'YES' : 'NO';
}

solution('found7, time: study; Yduts; emit, 7Dnuof');
