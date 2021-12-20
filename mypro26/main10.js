const mysum2 = (x, y) => { x, y };
console.log(mysum2(1, 2));

const mysum3 = (x, y) => {
    return { x, y };
};
console.log(mysum3(1, 2));

// 바로 객체로 리턴 받고 싶다면,
// 객체로 동작하게 하려면, 
// 객체를 바로 리턴할 목적이라면 ()를 해야 함.
const mysum4 = (x, y) => ({ x, y });
console.log(mysum4(1, 2));