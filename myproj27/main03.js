const { melon_data: song_array } = require("./melon_data");

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

// TODO: #3 좋아요수 top10을 출력
// Array의 sort 활용
// 출력포맷 : `[좋아요수] 곡명 가수명`

const like_array = song_array.sort((a, b) => {
    return b.like - a.like;
})

for (song of like_array.slice(0, 10)) {
    console.log(`[${song.like}], ${song.title}, ${song.artist}`);
}