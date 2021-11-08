from pprint import pprint  # 이쁘게 보이는 법(like 정렬)

from typing import List

import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())


"""
"방탄소년단"의 곡명 문자열로 구성된 리스트를 만들어보세요.
"""

# 1 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
# title_list: List[str] = []

# for song_dict in song_list:
#     artist: str = song_dict["artist"]
#     if artist == "방탄소년단":
#         title: str = song_dict["title"]
#         title_list.append(title)

# print(title_list)

# 2 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
# new_song_list: List[dict] = []

# for song_dict in song_list:
#     artist: str = song_dict["artist"]
#     if artist == "방탄소년단":
#         new_song_list.append(song_dict)

# print(new_song_list)


# 3 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
# def check_bts_song(song_dict):
#     """
#     BTS 노래라면 True를 반환합니다.
#     """
#     # bts 노래라면 True를 리턴
#     # 아니라면 False를 리턴
#     artist: str = song_dict["artist"]
#     return artist == "방탄소년단"

# new_song_list: List[dict] = []

# for song_dict in song_list:
#     if check_bts_song(song_dict):
#         new_song_list.append(song_dict)

# pprint(new_song_list)

# # 4 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
def check_bts_song(song_dict):
    """
    BTS 노래라면 True를 반환합니다.
    """
    # bts 노래라면 True를 리턴
    # 아니라면 False를 리턴
    artist: str = song_dict["artist"]
    return artist == "방탄소년단"


new_song_list = list(filter(check_bts_song, song_list))
print(new_song_list)

# 단순히 print만 한다라고 한다면
for song_dict in filter(check_bts_song, song_list):
    print("{title} {artist} {like}".format(**song_list))
# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
"""
곡명에 "사랑"이 포함된 곡들의 곡명 리스트를 만들어보세요.
"""

# 1 title_list: List[str] = []

# for song_dict in song_list:
#     title: str = song_dict["title"]
#     if "사랑" in title:
#         title_list.append(title)

# print(title_list)

# 2 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# def check_contains_love(song_dict):
#     title: str = song_dict["title"]
#     return "사랑" in title

# for song_dict in filter(check_contains_love, song_list):
#     print("{rank} ")


# "좋아요" 수가 200000 이상인 곡들의 곡명 리스트를 만들어 보세요.


# title_list: List[str] = []
# for song_dict in song_list:
#     title: str = song_dict["title"]
#     like: int = song_dict["like"]
#     if like >= 200_000:
#         title_list.append(title)

# print(title_list)

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


def check_above_200000(song_dict):
    like: int = song_dict["like"]
    return like >= 200000


for song_dict in filter(check_above_200000, song_list):
    print("{title} - {like}".format(**song_dict))
