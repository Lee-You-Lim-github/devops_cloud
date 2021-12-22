const { melon_data: song_array } = require("./melon_data");

const artist_count_object = song_array
    .reduce((acc, { artist }) => {
        acc[artist] ||= 0;
        acc[artist] += 1;
        return acc;
    }, {});

console.log(artist_count_object);
