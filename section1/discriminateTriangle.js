/*
* 삼각형 판별하기
*
* 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고, 만들 수 없으면 "NO"를 출력한다. */

const solution = (a, b, c) => {
    const side = [a, b, c];
    side.sort();

    if ((side[0] + side[1]) > side[2]) {
        return 'YES';
    } else {
        return 'NO';
    }
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

/*
* 강사님 코드
*          function solution(a, b, c){
                let answer="YES", max;
                let tot=a+b+c;
                if(a>b) max=a;
                else max=b;
                if(c>max) max=c;
                if(tot-max<=max) answer="NO";
                return answer;
            }

            console.log(solution(13, 33, 17));
*
* # 궁금한 점 : 배열로 풀면 소요시간이 더 오래 걸릴까?
* */