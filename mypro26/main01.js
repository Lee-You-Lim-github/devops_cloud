
// 변수/상수 선언 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


// 옛날 버전 - 안 씀.
// var name = '이유림';   // 선언
// name = "스티브";      // 변경


// 변수 
let name = '이유림';    // 선언
name = '스티브';       // 변경

// 상수 (Constant)
const age = 10;  // 초기화한 뒤에 변경을 하면 거부 됨.
// age = 12;    // 상수는 값을 변경할 수 없음.

console.log(name, age);


//제어구조 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//// IF 

const number = 10;
if (number % 2 === 0) {
    console.log("짝수");
}
else {
    console.log("홀수");
}

//// for 

for (let i = 1; i < 11; i++) {
    console.log(i);
};
// (i++) = (i += 1)

// for i in range(1, 11, 2):
//    print(i)

for (let i = 1; i < 11; i += 2) {
    console.log(i);
};

// 함수 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function mysum(x, y) {
    return x + y
};
console.log(mysum(1, 2));


// 익명 함수
const mysum2 = function (x, y) {
    return x + y;
};
console.log(mysum2(2, 3));

// arrow function
const mysum3 = (x, y) => {
    return x + y;
};
console.log(mysum2(3, 4));

const mysum4 = (x, y) => x + y;  // 바로 리턴해 줌.
console.log(mysum2(4, 5));

//// 함수 정의하는 문법 2번째, 4번째를 많이 사용함.

function mysum5(x, y, ...args) {
    console.log(x, y, args);
}

mysum5(1, 2, 3, 4, 5);

//

function reducer(prevValue, currentValue) {
    return prevValue + currentValue;
}

const result = [1, 2, 3, 4, 5].reduce(reducer, 0);  // 0은 초기값
console.log(result);

const result2 = [1, 2, 3, 4, 5].reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0);

console.log(result2);

const result3 = [1, 2, 3, 4, 5].reduce(
    (prevValue, currentValue) => prevValue + currentValue, 0);

console.log(result3);