const { melon_data: song_array } = require("./melon_data");

// TODO: #12 2곡 이상 랭크된 가수는 총 몇 팀인가요?   -- 곡이 2곡 이상인 가수
// reduce, Set


// 교수님 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/*
{
    "가수1": 2,
    "가수2": 4,
    "가수3": 5,
}
*/

const artist_count_object = song_array
    .reduce((acc, { artist }) => {
        // if (!acc[artist]) acc[artist] = 0;
        acc[artist] ||= 0;
        // acc[artist] = acc[artist] || 0;
        // i = i || 1
        // i ||= 1
        console.log(artist_count_object);
        acc[artist] += 1;
        return acc;
    }, {});

// // console.log(artist_count_object.value);    //{'방탄': 10}

// const a = Object.values(artist_count_object)
//     .filter(number => number >= 2)
//     .length;

// console.log(a);   // 14

// // python version

// // if artist not in acc:
// //     acc[artsit] = 0