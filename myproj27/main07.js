const { melon_data: song_array } = require("./melon_data");

// TODO: #7 방탄소년단의 곡명 문자열로 구성된 배열을 구성해주세요.
// Array의 filter와 map 활용
// 출력포맷 : [곡명1, 곡명2, 곡명3]


// const bts_array = song_array
//     .filter((bts) => bts.artist === "방탄소년단");



// const bts2_array = bts_array.map((bts_title) => {
//     return bts_title.title
// });

// console.log(bts2_array);


const bts_array = song_array
    .filter((bts) => bts.artist === "방탄소년단")
    .map((bts_title) => bts_title.title);

console.log(bts_array);




const bts_array = song_array
    .filter((bts) => bts.artist === "방탄소년단");

const bts2_array = bts_array.map((bts_title) => bts_title.title);

console.log(bts2_array);