const { melon_data: song_array } = require("./melon_data");

// TODO: #12 2곡 이상 랭크된 가수는 총 몇 팀인가요?   -- 곡이 2곡 이상인 가수
// reduce, Set



// const artist_Set = new Set();

const rank_title = song_array.reduce((acc, cur) => acc.artist + cur.artist >= 2);

console.log(rank_title);

// for (song of song_array) {
//     artist_Set.add(song.artist);
// }

// console.log(artist_Set.size);







// const rank_title = song_array.reduce((previous, current))

// .reduce((previous, current) => {
//     return previous.like < current.like ? current : previous;


