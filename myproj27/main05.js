const { melon_data: song_array } = require("./melon_data");


// TODO: #5 좋아요수가 200,000이상인 곡명에 대해서, 곡명 오름차순 정렬
// Array의 filter와 sort를 연계
// 출력포맷 : `[곡명] 좋아요수 가수명`

// 내 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const like_array = song_array.filter((a) => a.like >= 200000);

// const title_array = like_array.sort((x, y) => {
//     // if (x.title < y.title) { return -1 };
//     // else if (x.title > y.title) { return 1 };
//     // else (x.title === y.title) { return 0 };
//     return x.title < y.title ? -1 : y.title < x.title ? 1 : 0;
// })

// // x.title - y.title을 안 하는 이유: 문자열끼리는 계산 X   ->   '-'를 지원하지 않음 (Not A Numver)
// // 문자열은 대소비교만 가능. 

// for (song of title_array) {
//     console.log(`[${song.title}], ${song.like}, ${song.artist}`);
// }

// 교수님 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function compare_string_for_sort(string1, string2, is_ascending = true) {
    if (string1 < string2) {
        // 3항 연산자 
        return is_ascending ? -1 : 1;
    }
    else if (string1 > string2) {
        return is_ascending ? 1 : -1;
    }
    else {
        return 0;
    }
}

const like_array = song_array
    .filter(({ like }) => like >= 200_000)
    .sort(
        (song1, song2) => {
            return compare_string_for_sort(song1.title, song2.title, false)
        }
    );

for (song of like_array) {
    console.log(`[${song.like}], ${song.title}, ${song.artist}`);
}

