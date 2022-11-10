/*
* 교육과정 설계
*
* 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력하는 프로그램을 작성하세요.*/

const solution = (order, plan) => {
    order = order.split('');
    plan = plan.split('');

    const indexArr = [];

    for (let i = 0; i < order.length; i++) {
        if (plan.includes(order[i])) {
            indexArr.push(plan.findIndex((one) => one === order[i]));
        }
    }

    let count = 0;
    for (let i = 0; i < indexArr.length - 1; i++) {
        if (indexArr[i] < indexArr[i + 1]) count++;
    }

    if (count === order.length - 1) {
        return 'YES';
    } else {
        return 'NO';
    }
}

const order = 'CBA';
const plan = 'CBDAGE';
console.log(solution(order, plan));
