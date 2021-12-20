
// function base_10(fn) {
//     function wrap(x, y) {
//         return fn(x, y) + 10;
//     }
//     return wrap;
// }

// function mysum(x, y) {
//     return x + y;
// }

// mysum = base_10(base_10(mysum));

// console.log(mysum(1, 2));



// arrow function 버전으로 바꿔보세요.  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 내가 함.ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const mysum2 = 

// const base_10 = (fn) => wrap = (x, y) => fn(x, y) +10;

// const mysum = (x, y) 
// => x + y;
// => base_10 = (fn);
// => wrap = (x, y);
// => (fn(x, y) +10);

// console.log(mysum(1, 2));

// 교수님 설명 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const base_10 = (fn) => (x, y) => fn(x, y) + 10;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const base_10 = (fn) => (x, y) => fn(x, y) + 10;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const base_10 = (fn) => (x, y) => fn(x, y) + 10;

let mysum = (x, y) => x + y;

mysum = base_10(base_10(mysum));

console.log(mysum(1, 2));


