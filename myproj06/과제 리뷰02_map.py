import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())

"""
멜론TOP100 리스트에서 "곡명 / 단어수"로 구성된 리스트를 만들어 봅시다.
 - 총 100줄 중에 한 줄 출력 의 예 : Dynamite ➡ 1
"""

# for song_dict in song_list:
#     title: str = song_dict["title"]
#     title_length = len(title.split())
#     print(title, title_length)



# def get_title_for_song(song_dict):
#     return song_dict["title"]


# for song_dict in song_list:
#     # 변환을 담당하는 함수
#     print(get_title_for_song(song_dict))
# -----------------------------------------------------------------
# title_list = list(map(get_title_for_song, song_list))
# print(title_list)
# -------------------------------------------------------------------
# for title in map(get_title_for_song, song_list):
#     print(f"{title} - {len(title)}")


def get_title_and_length_for_song(song_dict):
    title: str = song_dict["title"]
    return [title, len(title)]


for title, length in map(get_title_and_length_for_song, song_list):
    print(title, length)

# 방탄소년단의 노래에 대해서만, 곡명과 곡명의 글자수를 출력

bts_list = []

for song_dict in song_list:
    if song_dict["artist"] == "방탄소년단":
        title: str = song_dict["title"]
        bts_list.append([title, len(title)])

for title, length in bts_list:
    print(title, length)

# filter/ map 버전

def get_title_and_length_for_song(song_dict):
    title: str = song_dict["title"]
    return [title, len(title)]

def check_bts_song(song_dict):
    return song_dict["artist"] == "방탄소년단"

for title, length in map(
    get_title_and_length_for_song, filter(check_bts_song, song_list) # map의 두 번째 인자에 목록을 넣을 수 있기 때문에 filter(목록)을 넣을 수 있음
):
    print(title, length)


# 연습문제
# artist 글자수가 3글자 이상인 곡에 대해서 - filter
# 각 곡의 좋아요 수와 제목글자수의 곱을 출력해 보세요.

# 1) for/if로 구현
# 2) filter/map 위주로 구현

artist_length = []

def get_artist_length(song_dict):
    if len(song_dict["artist"]) >= 3:
        artist: str = song_dict["artist"]
        title_length: int = len(song_dict["title"])
        artist_length.append([artist, song_dict["like"] * title_length])

for artist, song_dict["like"] * title in artist_length:
    print(artist, song_dict["like"] * title)
    



"""
멜론TOP100 리스트에서 "곡명" 단어수로 TOP10 곡명 출력
단어수가 제일 큰 노래가 우선순위가 가장 높겠죠.
"""
