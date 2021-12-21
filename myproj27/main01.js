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

const { melon_data: song_array, melon_data } = require("./melon_data");

// console.log(song_array);

// for (const song of melon_data) {
//     console.log(song.like, song.title);
// }

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// TODO: #1 like 오름차순으로 정렬
// 출력포맷 : `[좋아요수] 곡명`
// Array의 sort 활용
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


const like_array = song_array.sort((a, b) => {
    return a.like - b.like;  // 오름차순
})

for (const song of like_array) {
    console.log(`[${song.like}], ${song.title}`);
}
