import pandas as pd

df = pd.read_csv("https://bit.ly/3nsLDXy")
song_list = list(df.T.to_dict().values())

title = []


def list_fn1():
    return song_dict["title"] in song_list


for song_dict in filter(list_fn1, song_list):
    song_list.append(title)
