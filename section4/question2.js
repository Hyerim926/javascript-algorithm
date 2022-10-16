/*
* 뒤집은 소수
*
* N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
* 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.*/

// 소수: 1과 자신만을 약수로 가지는 수 단, 1은 소수가 아니다
const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        // 1과 자기 자신으로 나눴을 때는 당연히 나누어 떨어지므로 2부터 (자기 자신 - 1) 까지만 나머지 값을 확인해야함
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

const solution = (array) => {
    const answer = [];
    for (let i = 0; i < array.length; i++) {
        let reverse = Number(array[i].toString().split('').reverse().join(''));

        if (isPrime(reverse)) answer.push(reverse);
    }

    return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));