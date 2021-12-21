const { melon_data: song_array } = require("./melon_data");

// TODO: #6 "곡명 / 단어수" 배열을 구성해주세요.
// Array의 map 활용
// 100줄에서 한 줄 출력의 예: `Dynamite / 1`



const count_title = song_array.map(a =>
(
    { title: a.title, length: a.title.trim().split(' ').length }  // 객체의 이름을 지정해 줌. 
)
);

for (song of count_title) {
    console.log(`${song.title} / ${song.length}`);
}

