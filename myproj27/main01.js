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


// Array의 sort는 
//    자신(array)의 순서도 변경하고, 자신을 반환
// Python의 List sort는 
//      자신(list)의 순서만 변경하고, 리턴 값이 없어요. (None)

// 내 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const like_array = song_array.sort((song1, song2) => {
    return song1.like - song2.like;  // 오름차순
    // song2가 크면, 음수
    // song1이 크면, 양수
    // 0
})

const { like, title } = song;   // like, title 필드만 받겠다.

console.log(like, title);

// for (const { like, title } of like_array) {
//     console.log(`[${like}], ${title}`);
// }

