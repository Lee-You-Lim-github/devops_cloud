const { melon_data: song_array } = require("./melon_data");

// TODO: #13 방탄소년단의 곡 중에 좋아요 수가 가장 큰 곡명은?
// Array의 filter와 reduce를 활용해주세요.

// 내 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const bts_array = song_array
//     .filter((bts) => bts.artist === '방탄소년단')
//     .reduce((previous, current) => {
//         return previous.like < current.like ? current : previous;
//     });

// console.log(bts_array.title);

// 교수님 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const bts = song_array
    .filter(({ artist }) => artist === '방탄소년단')
    .reduce((acc, song) => {
        if (!acc) return song;
        else if (acc.like < song.like)
            return song;
        else
            return acc;
    }, null)

console.log(bts);