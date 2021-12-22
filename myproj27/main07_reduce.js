// reduce ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

numbers = [1, 2, 3, 4, 5]

// 제곱 배열 생성

// // map
// const map_new_numbers = numbers.map(
//     (number) => number * number);
// console.log(map_new_numbers);

// // reduce
// const reduce_new_numbers = numbers.reduce(
//     (acc, number) => {
//         acc.push(number * number);
//         return acc;
//     }, []
// );
// console.log(reduce_new_numbers);

// // 새로운 객체 생성
// const new_numbers_object = numbers.reduce(
//     (acc, number) => {
//         acc[number] = number * number
//         return acc;
//     }, {}
// );

// console.log(new_numbers_object);
// //{ '1': 1, '2': 4, '3': 9, '4': 16, '5': 25 }

const new_numbers = numbers.map(
    (number) => number > 2
);

console.log(new_numbers);

const filter_new_numbers = numbers.filter(
    (number) => number > 2
);

console.log(filter_new_numbers);