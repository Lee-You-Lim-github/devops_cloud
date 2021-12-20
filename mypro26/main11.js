const fs = require("fs");   // require: import
const fsPromises = fs.promises

// 3 : await는 promise 문법에 대한 축약      // Promise 객체를 리턴함.
async function main() {
    try {
        const files = await fsPromises.readdir("c:/Dev");
        console.log("loaded :", files);
    }
    catch (error) {
        console.error(error);
    }
}

main();  // 빼먹지 말아야 함.

//2 : Promise
// then: 정상동작 했다면
// fsPromises.readdir("c:/Dev")    
//     .then(files => console.log("loaded :", files))
//     .catch(error => console.error(error));

// 1
// 디렉토리 목록을 읽어낸 후 함수 호출
// fs.readdir("c:/Dev", function (err, files) {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.log(files)
//     }
// })

console.log("ENDED");


