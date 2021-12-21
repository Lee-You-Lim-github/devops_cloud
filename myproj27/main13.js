const { melon_data: song_array } = require("./melon_data");

// TODO: #13 방탄소년단의 곡 중에 좋아요 수가 가장 큰 곡명은?
// Array의 filter와 reduce를 활용해주세요.

const bts_array = song_array
    .filter((bts) => bts.artist === '방탄소년단')
    .reduce((previous, current) => {
        return previous.like < current.like ? current;
    });

console.log(bts_array.title);

