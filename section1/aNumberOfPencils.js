/*
* 연필 개수
*
* 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생 수를 입력하면 필요한 연필의 다스 수를
* 계산하는 프로그램을 작성하세요 */

const solution = (n) => {

    // n을 12로 나눈 값을 parseInt로 몫만 가지고 있고, 나머지가 0보다 큰 경우에는 그 몫에 1을 더해줌
    let pencils = parseInt(n / 12);
    // 올림 함수인 Math.ceil() 사용하면 한 줄로 가능
    // let pencils = Math.ceil(n / 12);

    if (n % 12 > 0) {
        pencils += 1;
    }

    return pencils;
};

console.log(solution(25));