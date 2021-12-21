const { melon_data: song_array } = require("./melon_data");

// TODO: #14 방탄소년단의 곡 중에 좋아요 수가 가장 작은 곡명은?
// Array의 filter와 reduce를 활용해주세요.

const bts_array = song_array
    .filter((bts) => bts.artist === '방탄소년단')
    .reduce((previous, current) => {
        return previous.like < current.like ? previous : current;
    });

console.log(bts_array.title);