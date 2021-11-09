"""
Quiz: 멜론top10 리스트에서...
"""
import pandas as pd

from myproj07.main02 import pick_word_count_for_title

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())


# "좋아요" 수가 가장 많은 곡은? 가장 작은 곡은?


def peek_like_for_song(song_dict):
    return song_dict["like"]


# song_list가 빈 리스트일 경우에 대한 대처 #1
song_dict = max(song_list, key=peek_like_for_song, default=None)
if song_dict == None:
    print("노래목록이 비었습니다.")
else:
    print(song_dict)


# song_list가 빈 리스트일 경우에 대한 대처 #2
try:
    song_dict = max(song_list, key=peek_like_for_song, default=None)

except ValueError:
    print("노래목록이 비었습니다.")
else:
    print(song_dict)


# song_list가 빈 리스트일 경우에 대한 대처 #3
if song_list:
    song_dict = max(song_list, key=peek_like_for_song)
    print(song_dict)
else:
    print("노래목록이 비었습니다.")
