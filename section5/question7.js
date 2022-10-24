/*
* 아나그램(해쉬)
*
* Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아 나그램이라고 합니다.
* 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
* 즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
* 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다.*/

const solution = (str1, str2) => {
    let obj1 = {};
    let obj2 = {};

    /*
    * obj = { A: 2, b: 1, a: 1, e: 2, C: 1 }
    * 각 문자와 해당 문자의 개수를 객체에 담아 만듦
    * */
    str1.split('').forEach((one) => {
        obj1[one] = str1.split('').filter((letter) => letter === one).length;
    })
    str2.split('').forEach((one) => {
        obj2[one] = str2.split('').filter((letter) => letter === one).length;
    })

    // 만들어진 두 객체를 일대일 비교하여 동일한 횟수 도출
    let count = 0;
    for (let str1Key in obj1) {
        for (let str2Key in obj2) {
            if (str1Key === str2Key && obj1[str1Key] === obj2[str2Key]) count++;
        }
    }

    // count 수와 key 의 length 를 비교
    if (count === Object.keys(obj1).length) return 'YES';
    return 'NO';
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
