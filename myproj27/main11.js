const { melon_data: song_array } = require("./melon_data");

// TODO: #11 멜론 top100 리스트에 랭크된 가수는 총 몇 팀인가요?
// Set와 속성 .size를 활용
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

// 내 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const mySet = new Set();

// for (song of song_array) {
//     mySet.add(song.artist);
// }

// console.log(mySet.size);

// // 교수님 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const artist_array = song_array
//     .map(({ artist }) => artist);

// const artist_set = new Set(artist_array);

// console.log(artist_set.size);

// reduce ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const artist_count = song_array
    // .map(({ artist }) => artist)
    .reduce((acc, { artist }) => {    // map을 추가할 시 {artist}  -> artist
        acc.add(artist);
        return acc;
    }, new Set())
    .size;

console.log(artist_count);

