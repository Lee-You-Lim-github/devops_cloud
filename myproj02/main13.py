import random
import time

typing = [
    "cat",
    "dog",
    "fox",
    "monkey",
    "mouse",
    "panda",
    "frog",
    "snake",
    "wolf",
]

input("준비되셨으면, 엔터기를 입력해주세요.")

random.shuffle(typing)

begin_time = time.time()


count = 0

text_len = 0

for random_name in typing[0:5]:
    print(random_name)
    line = input(">>> ")
    text_len += len(line)
    if random_name == line:
        count += 1
        print("정확합니다.")
    else:
        print("오타가 있어요.")

end_time = time.time()

speed = int(text_len / (end_time - begin_time) * 60)

print(f"{count}번 성공하셨습니다.")
print(f"총 {end_time - begin_time}초가 걸려셨어요.")
print(f"타이핑 속도는 {speed}입니다.")
