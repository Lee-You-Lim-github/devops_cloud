const { melon_data: song_array } = require("./melon_data");


// TODO: #5 좋아요수가 200,000이상인 곡명에 대해서, 곡명 오름차순 정렬
// Array의 filter와 sort를 연계
// 출력포맷 : `[곡명] 좋아요수 가수명`

const like_array = song_array.filter((a) => a.like >= 200000);

const title_array = like_array.sort((x, y) => {
    // if (x.title < y.title) { return -1 };
    // else if (x.title > y.title) { return 1 };
    // else (x.title === y.title) { return 0 };
    return x.title < y.title ? -1 : y.title < x.title ? 1 : 0;
})

for (song of title_array) {
    console.log(`[${song.title}], ${song.like}, ${song.artist}`);
}