const { question } = require("readline-sync");

const animal_names = [
    "cat",
    "dog",
    "fox",
    "monkey",
    "mouse",
    "panda",
    "frog",
    "snake",
    "wolf",
];

// TODO: shuffle
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(animal_names);
// console.log(animal_names);

// TODO: 현재 timestamp
let begin_time = new Date().getTime();



// TODO: slicing
const random_animal = animal_names.slice(0, 5);
// console.log(random_name);

let ok_counter = 0;

for (let random_name of random_animal) {
    console.log(random_name);
    const line = question(">>>");

    if (random_name == line) {
        console.log("정확합니다.");
        ok_counter++;
    }
    else {
        console.log("오타가 있어요.");
    }
}

let end_time = new Date().getTime();

let total_time = parseInt((end_time - begin_time) / 1000);



console.log(`${ok_counter}번 성공하셨습니다.`);
console.log(`총 ${total_time}초가 걸리셨습니다.`);


