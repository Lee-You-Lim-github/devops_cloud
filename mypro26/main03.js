
// 객체
// const age = "나이";

// const tom = {
//     "name": "Tom",
//     // "age": 10,
//     // age: 10,
//     // ["ag" + "e"]: 10,  //[]: 식을 계산하라(age는 문자열이며 Array가 아님.)
//     [age]: 10,
// }

// console.log(tom);

// 단축 속성명 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const name = "Tom";
const age = 10;
const tom1 = {
    name,
    age,
    print() {
        // console.log(this.name, this.age);

        // Template Literals: 여러 줄을 지원   // 맨 왼쪽으로 붙여야 함.
        console.log(`안녕. 나는 ${this.name}이야. 
${this.age}살이지`)
    }
}
// key와 value의 값이 같은면 value를 생략 가능 . // "name": name == name:name, name

tom1.print();