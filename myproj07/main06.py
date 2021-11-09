from pprint import pprint

import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())

"""
방탄소년단 노래의 좋아요 총 합.
"""


like_sum_for_bts = sum(
    [song_dict["like"] for song_dict in song_list if song_dict["artist"] == "방탄소년단"]
)

print(like_sum_for_bts)
