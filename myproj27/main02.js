const { melon_data: song_array } = require("./melon_data");

/*
{
    'Unnamed: 0': 99,
    song_no: 31316695,
    title: '하루도 그대를 사랑하지 않은 적이 없었다',
    album: '하루도 그대를 사랑하지 않은 적이 없었다',
    artist: '임창정',
    rank: 100,
    like: 162928
  }
*/

// TOOD: #2 방탄소년단의 곡명만 출력
// 출력포맷 : `가수명 곡명 좋아요수`
// Array의 filter 활용
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1: filter X
// for (song of song_array) {
//     if (song.artist == '방탄소년단') {
//         console.log(song.artist, song.title, song.like);
//     }
// }


// 2: 
// const bts_array = song_array.filter(function (bts) {
//     return bts.artist == "방탄소년단";
// })

// 3: 
const bts_array = song_array.filter((bts) => bts.artist == "방탄소년단");


for (song of bts_array) {
    console.log(song.artist, song.title, song.like);
}



