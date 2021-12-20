// const get_default_value = () => 10;

// const get_default_value = () => {
//     return 10;
// };

// function get_default_value() {
//     return 10;
// }

const get_default_value = () => {
    console.log("get_default_value() 함수 호출");
    return 10;
};

// 디폴트 값이 필요하기 때문 함수가 호출 됨. 필요 없으면 호출되지 않음.
function hello(name, age = get_default_value()) {
    console.log(`안녕. 나는 ${name}이야 ${age}살이지.`);
}

hello("Tom");
hello("Steve");
hello("John");