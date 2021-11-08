# 기초 데이터로서 멜론 top100 리스트 구성하기

import pandas as pd
import collections as Counter 

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())
# print(song_list)

"""
방탄소년단의 곡명만 출력해 보세요
Hint: for 루프 내에서 if 조건문을 통해, "가수" 필드 체크
"""

for song_dict in song_list:
    song_dict["artist"] == "방탄소년단":
        print(song_dict["title"])


"""
곡명에 "가을"이 들어가는 곡명만 출력해 보세요.
Hint: 포함여부 = "가을" in 곡명
"""

for song_dict in song_list:
    if "가을" in song_dict["title"]:
        print(song_dict["title"])


"""
좋아요 수가 200_000이 넘는 곡수는?
"""

count = 0
for song_dict in song_list:
    if song_dict["like"] > 200_000:
        count += 1


"""
가수 별 곡수를 출력해 보세요."""

# artist_list = []
# for song_dict in song_list:
#     artist_list.append(artist)

# 다른 방법

# artist_list = [
#     song_dict["artist"] 
#     for song_dict in song_list]

#     # fmt: on
# print(Counter(artist_list)) 


artist_list = [
    song_dict["artist"] 
    for song_dict in song_list]

print(Counter(artist_list)) 

counter = Counter(artist_list)

# for artist in count:   # keys
#     prtin(artist)

# for artist in counter.values():   # values
#     print(song_count)

for artist in count:
    print(artist, counter[artist])     # key: values


for artist, song_count in counter.items(): 
    print(artist, song_count)