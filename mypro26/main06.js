// 객체 비구조화

const tom = {
    name: "Tom",
    age: 10,
    regin: "Daejeon",
}

// const name = tom.name;
// const age = tom["age"];

// 어떤 객체에서 내가 원하는 값만 뽑아 올 때.

// 키명과 저장할 변수명이 같은 경우
// const { name, age } = tom;  // tom에서 name만 꺼냄.
// console.log(name)

// 키 name을 읽어와서 otherName 변수에 저장.
const { name: otherName } = tom;
console.log(otherName);

const steve = {
    name: {
        first: "Steve",
        last: "Jobs"
    },
    age: 10,
    regin: "Daejeon",
};

const { name: otherName2 } = steve;
console.log(otherName2);

// naem이라는 객체 안에 first라는 key를 참조하겠다.
const { name: { first: firstname } } = steve;
console.log(firstname);