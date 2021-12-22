const { melon_data: song_array } = require("./melon_data");

// TODO: #6 "곡명 / 단어수" 배열을 구성해주세요.
// Array의 map 활용
// 100줄에서 한 줄 출력의 예: `Dynamite / 1`


// 내 풀이: 배열이 아님. ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const count_title = song_array.map(a =>
// (
//     { title: a.title, length: a.title.trim().split(' ').length }  // 객체의 이름을 지정해 줌. 
// )
// );

// for (song of count_title) {
//     console.log(`${song.title} / ${song.length}`);
// }

// 교수님 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const title_array = song_array.map(
    (song) => {
        const word_count = song.title.trim().split(/\s+/).length;
        return `${song.title}/ ${word_count}`
    }
);

console.log(title_array);

// 기존 song_array 배열에서 
// word_count 라는 컬럼을 추가하고 싶다.

const new_song_array = song_array.map(
    (song) => {
        const word_count = song.title.trim().split(/\s+/).length;
        return {
            ...song,
            word_count: word_count,
        };
    },
);

console.log(new_song_array);   // array

for (const new_song of new_song_array) {
    console.log(new_song);  // 기존 song_array에서 word_count를 추가.   -> object
}
