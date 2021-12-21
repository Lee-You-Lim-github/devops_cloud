const { melon_data: song_array } = require("./melon_data");

// TODO: #10 방탄소년단의 좋아요의 총 합은?
// Array의 filter와 reduce를 활용해주세요.
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const bts_array = song_array
    .filter((bts) => bts.artist === '방탄소년단')
    .reduce((acc, cur) => acc + cur.like, 0)

console.log(`총 like 수: ${bts_array}`);


