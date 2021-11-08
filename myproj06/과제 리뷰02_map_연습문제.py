from typing import List
import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())


# artist_length = []

# def get_artist_length(song_dict):
#     if len(song_dict["artist"]) >= 3:
#         artist: str = song_dict["artist"]
#         title_length: int = len(song_dict["title"])
#         artist_length.append([artist, song_dict["like"] * title_length])

# for artist, song_dict["like"] * title in artist_length:
#     print(artist, song_dict["like"] * title)


# 연습문제
# artist 글자수가 3글자 이상인 곡에 대해서 - filter
# 각 곡의 좋아요 수와 제목글자수의 곱을 출력해 보세요.

# 1) for/if로 구현
# 2) filter/map 위주로 구현

# def check_above_3_for_artist(song_dict):
#     return len(song_dict["artist"]) >= 3

# for song_dict in song_list:
#     # if len(song_dict["artist"]) >= 3:
#     if check_above_3_for_artist(song_dict):
#         print(song_dict["title"])


"""
교수님 풀이
"""
# 1) for/if로 구현

value_list: List[int] = []
for song_dict in song_list:
    artist: str = song_dict["artist"]
    if len(artist) >= 3:
        value: int = song_dict["like"] * len(song_dict["title"])
        value_list.append(value)

for value in value_list:
    print(value)
