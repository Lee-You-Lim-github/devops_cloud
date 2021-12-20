// 나머지 값은 임의의 값에 담고 싶음.
// const [name, ...rest] = ["Tom", 10, "Seoul"]

// console.log(name);
// console.log(rest);

const numbers = [1, 2, 3];

const new_numbers = [
    10, 20, 30,
    ...numbers,
    40, 50, 60,
    ...numbers,
    70, 80, 90,
    ...numbers,

]

console.log(new_numbers)

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

tom = {
    "name": "Tom",
    "age": 10,
    "region": "Seoul"
};

// ...: 전개
const steve = {
    ...tom,
    name: "Steve",
};

console.log(steve);