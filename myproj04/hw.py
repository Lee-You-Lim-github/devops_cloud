# 기초 데이터로서 멜론 top100 리스트 구성하기

import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())
song_list


singer_name = []

for song in song_list:
    singer_name.append(song["artist"])
    
singer_set = set(singer_name)
singer_name = 


song_list_집합 = set(song['artist'])






singer_dict = {'artist', count}

for song in song_list:
    if song['artist'] in singer_dict:
        singer_dict[song['artist']] += 1
    else:
        singer_dict[song['artist']] = 1

print(singer_dict)