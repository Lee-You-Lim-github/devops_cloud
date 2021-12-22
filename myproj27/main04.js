const { melon_data: song_array } = require("./melon_data");

// TODO: #4 좋아요수가 200,000 이상인 곡명만 출력하기
// Array의 filter 활용
// 출력포맷 : `[좋아요수] 곡명 가수명`

// 내 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const like_array = song_array.filter((a) => a.like >= 200000);

// for (song of like_array) {
//     console.log(`[${song.like}], ${song.title}, ${song.artist}`);
// }

// 교수님 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const like_array = song_array.filter(({ like }) => like >= 200_000);

for ({ like, title, artist } of like_array) {
    console.log(`[${like}], ${title}, ${artist}`);
}