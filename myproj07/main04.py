"""
리스트에 랭크된 가수는 총 몇 팀인가요? (중복 제거한 가수명 리스트 크기)
"""

import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())

# 1

artist_list = []

for song_dict in song_list:
    artist: str = song_dict["artist"]
    if artist not in artist_list:  # 중복 없이 append 가능
        artist_list.append(artist)
print(len(artist_list))

# 2

artist_set = set()
for song_dict in song_list:
    artist: str = song_dict["artist"]
    artist_set.add(artist)

print(len(artist_set))


# 3

artist_set = set([song_dict["artist"] for song_dict in song_list])
print(len(artist_set))

# 4 : Set Comprehension

artist_set = {song_dict["artist"] for song_dict in song_list}
print(len(artist_set))

# 3,4번이 주로 파이썬에서 많이 써야 함.
