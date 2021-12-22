numbers = [1, 2, 3, 4, 5]

// 새로운 객체 생성
const new_numbers_object = numbers.reduce(
    (acc, number) => {
        acc[number] = number * number
        return acc;
    }, {}
);

console.log(new_numbers_object);
//{ '1': 1, '2': 4, '3': 9, '4': 16, '5': 25 }

