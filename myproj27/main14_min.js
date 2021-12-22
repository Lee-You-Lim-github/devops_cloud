const { melon_data: song_array } = require("./melon_data");

// TODO: #14 방탄소년단의 곡 중에 좋아요 수가 가장 작은 곡명은?
// Array의 filter와 reduce를 활용해주세요.

Array.prototype.max = function (key_fn) {
    return this.reduce((acc, song) => {
        return key_fn(acc) < key_fn(song) ? song : acc;
    })
};

Array.prototype.min = function (key_fn) {
    return this.reduce((acc, song) => {
        return key_fn(acc) > key_fn(song) ? song : acc;
    })
};


const top_song = song_array
    .filter(({ artist }) => artist === '방탄소년단')
    .min(({ rank }) => rank);     // rank의 최솟값: 1

console.log(top_song);   // rank = 1인 object 출력