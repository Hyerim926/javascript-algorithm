/*
* 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며,
* 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.*/

const solution = (arr) => {
    const nineSum = arr.reduce((pre, cur) => pre + cur);
    const remainHeight = nineSum - 100;

    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === remainHeight) {
                console.log(arr[i], arr[j]);
                answer.splice(j, 1);
                answer.splice(i, 1);
                break;
            }
        }
    }
    console.log(answer);
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
