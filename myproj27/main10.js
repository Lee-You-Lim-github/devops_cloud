const { melon_data: song_array } = require("./melon_data");

// TODO: #10 방탄소년단의 좋아요의 총 합은?
// Array의 filter와 reduce를 활용해주세요.
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// 내 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const bts_array = song_array
//     .filter((bts) => bts.artist === '방탄소년단')
//     .reduce((acc, cur) => acc + cur.like, 0);

// console.log(`총 like 수: ${bts_array}`);

// 교수님 풀이 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// js에서 함수를 커스텀하기 
// sum()

Array.prototype.sum = function () {   // this를 쓸 땐 arrow를 쓰면 안 됨. 
    return this.reduce((acc, element) => {
        return acc + element;
    }, 0)
};

// const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sum();  // 55

// console.log(result);



const bts_array = song_array
    .filter(({ artist }) => artist === '방탄소년단')
    // .reduce((acc, {like}) => acc + like, 0);

    .map(({ like }) => like)   // sum은 array를 받기 때문에
    .sum()

console.log(`총 like 수: ${bts_array}`);
